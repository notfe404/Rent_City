package T2507E.Rentcity.controller;

import T2507E.Rentcity.dto.request.UploadDocumentRequest;
import T2507E.Rentcity.dto.request.VerifyRequest;
import T2507E.Rentcity.entity.User;
import T2507E.Rentcity.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    public String upload(HttpServletRequest req,
                         @RequestBody UploadDocumentRequest body) {

        String userId = (String) req.getAttribute("userId");
        return service.uploadDoc(userId, body);
    }

    @PostMapping("/admin/verify-document")
    public String verify(HttpServletRequest req,
                         @RequestBody VerifyRequest body) {

        String role = (String) req.getAttribute("role");

        return service.verifyDoc(role, body);
    }
}
