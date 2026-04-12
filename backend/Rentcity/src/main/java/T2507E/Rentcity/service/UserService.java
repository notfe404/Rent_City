package T2507E.Rentcity.service;




import T2507E.Rentcity.dto.request.UploadDocumentRequest;
import T2507E.Rentcity.dto.request.VerifyRequest;
import T2507E.Rentcity.entity.User;
import T2507E.Rentcity.entity.UserDocument;
import T2507E.Rentcity.repository.UserDocumentRepository;
import T2507E.Rentcity.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.List;
import java.util.UUID;

@Service
public class UserService {
    @Autowired
    private UserDocumentRepository docRepo;
    @Autowired
    private UserRepository repo;

    public User getById(String id) {
        return repo.findById(UUID.fromString(id)).orElseThrow();
    }
    public String uploadDoc(String userId,
                            String docType,
                            String docNumber,
                            MultipartFile frontFile,
                            MultipartFile backFile) {

        // TODO: upload to cloud (Cloudinary, S3, etc.)
        String frontUrl = saveFile(frontFile);
        String backUrl = saveFile(backFile);

        UserDocument doc = new UserDocument();
        doc.setId(UUID.randomUUID());
        doc.setUserId(UUID.fromString(userId));
        doc.setDocType(docType);
        doc.setDocNumber(docNumber);
        doc.setFrontUrl(frontUrl);
        doc.setBackUrl(backUrl);
        doc.setVerified(false);

        docRepo.save(doc);

        return "UPLOADED";
    }

    private String saveFile(MultipartFile file) {
        try {
            String fileName = UUID.randomUUID() + "_" + file.getOriginalFilename();

            String uploadDir = System.getProperty("user.dir") + "/uploads/";
            File dir = new File(uploadDir);
            if (!dir.exists()) dir.mkdirs();

            File dest = new File(uploadDir + fileName);
            file.transferTo(dest);

            return "http://localhost:8080/uploads/" + fileName;

        } catch (Exception e) {
            throw new RuntimeException("File upload failed", e);
        }
    }

    public String verifyDoc(String role, VerifyRequest req) {

        if (!"STAFF".equals(role) && !"ADMIN".equals(role))
            throw new RuntimeException("Forbidden");

        UserDocument doc = docRepo.findById(req.getDocumentId())
                .orElseThrow();

        doc.setVerified(true);
        docRepo.save(doc);

        return "VERIFIED";
    }

    public User updateUser(String id, User newData) {
        User u = repo.findById(UUID.fromString(id)).orElseThrow();

        u.setFullName(newData.getFullName());
        u.setPhone(newData.getPhone());

        return repo.save(u);
    }

    public List<UserDocument> getUserDocs(String userId) {
        return docRepo.findByUserId(UUID.fromString(userId));
    }
}
