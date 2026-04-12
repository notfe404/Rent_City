package T2507E.Rentcity.controller;



import T2507E.Rentcity.dto.request.LoginRequest;
import T2507E.Rentcity.dto.request.RefreshRequest;
import T2507E.Rentcity.dto.request.RegisterRequest;
import T2507E.Rentcity.dto.response.LoginResponse;
import T2507E.Rentcity.dto.response.RefreshResponse;
import T2507E.Rentcity.entity.User;
import T2507E.Rentcity.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService service;

    @PostMapping("/register")
    public LoginResponse register(@RequestBody RegisterRequest r) {
        return service.register(r);
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest r) {
        return service.login(r);
    }

    @PostMapping("/refresh")
    public RefreshResponse refresh(@RequestBody RefreshRequest req) {
        return service.refresh(req.getRefreshToken());
    }

    @PostMapping("/logout")
    public String logout(@RequestBody RefreshRequest req) {
        service.logout(req.getRefreshToken());
        return "LOGGED OUT";
    }

    @GetMapping("/me")
    public User me(@RequestHeader("Authorization") String authHeader) {
        return service.getCurrentUser(authHeader);
    }

    @GetMapping("/test")
    public String test() {
        return "SECURED WORKING";
    }
}
