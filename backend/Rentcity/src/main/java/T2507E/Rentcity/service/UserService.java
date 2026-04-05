package T2507E.Rentcity.service;




import T2507E.Rentcity.dto.request.UploadDocumentRequest;
import T2507E.Rentcity.dto.request.VerifyRequest;
import T2507E.Rentcity.entity.User;
import T2507E.Rentcity.entity.UserDocument;
import T2507E.Rentcity.repository.UserDocumentRepository;
import T2507E.Rentcity.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    public String uploadDoc(String userId, UploadDocumentRequest r) {

        UserDocument doc = new UserDocument();
        doc.setId(UUID.randomUUID());
        doc.setUserId(UUID.fromString(userId));
        doc.setDocType(r.getDocType());
        doc.setDocNumber(r.getDocNumber());
        doc.setFrontUrl(r.getFrontUrl());
        doc.setBackUrl(r.getBackUrl());
        doc.setVerified(false);

        docRepo.save(doc);

        return "UPLOADED";
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
}
