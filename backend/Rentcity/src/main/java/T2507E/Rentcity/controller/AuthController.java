package T2507E.Rentcity.controller;



import T2507E.Rentcity.dto.request.LoginRequest;
import T2507E.Rentcity.dto.request.RefreshRequest;
import T2507E.Rentcity.dto.request.RegisterRequest;
import T2507E.Rentcity.dto.response.LoginResponse;
import T2507E.Rentcity.dto.response.RefreshResponse;
import T2507E.Rentcity.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService service;

    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest r) {
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

    @GetMapping("/test")
    public String test() {
        return "SECURED WORKING";
    }
}
