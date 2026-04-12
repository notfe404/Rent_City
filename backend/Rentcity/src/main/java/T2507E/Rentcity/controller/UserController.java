package T2507E.Rentcity.controller;

import T2507E.Rentcity.dto.request.UploadDocumentRequest;
import T2507E.Rentcity.dto.request.VerifyRequest;
import T2507E.Rentcity.entity.User;
import T2507E.Rentcity.entity.UserDocument;
import T2507E.Rentcity.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService service;

    @GetMapping("/me")
    public User me(HttpServletRequest req) {
        String id = (String) req.getAttribute("userId");
        return service.getById(id);
    }

    @PostMapping("/upload-document")
    public String upload(
            HttpServletRequest req,
            @RequestParam("docType") String docType,
            @RequestParam("docNumber") String docNumber,
            @RequestParam("frontFile") MultipartFile frontFile,
            @RequestParam("backFile") MultipartFile backFile
    ) {
        String userId = (String) req.getAttribute("userId");

        return service.uploadDoc(userId, docType, docNumber, frontFile, backFile);
    }

    @PostMapping("/admin/verify-document")
    public String verify(HttpServletRequest req,
                         @RequestBody VerifyRequest body) {

        String role = (String) req.getAttribute("role");

        return service.verifyDoc(role, body);
    }

    @PutMapping("/update")
    public User update(HttpServletRequest req, @RequestBody User body) {
        String id = (String) req.getAttribute("userId");
        return service.updateUser(id, body);
    }

    @GetMapping("/documents")
    public List<UserDocument> getMyDocs(HttpServletRequest req) {
        String userId = (String) req.getAttribute("userId");
        return service.getUserDocs(userId);
    }
}
