package T2507E.Rentcity.service;


import T2507E.Rentcity.config.JwtUtil;
import T2507E.Rentcity.dto.request.LoginRequest;
import T2507E.Rentcity.dto.request.RegisterRequest;
import T2507E.Rentcity.dto.response.LoginResponse;
import T2507E.Rentcity.dto.response.RefreshResponse;
import T2507E.Rentcity.entity.RefreshToken;
import T2507E.Rentcity.entity.User;
import T2507E.Rentcity.enums.UserRole;
import T2507E.Rentcity.enums.UserStatus;
import T2507E.Rentcity.repository.RefreshTokenRepository;
import T2507E.Rentcity.repository.UserRepository;
import T2507E.Rentcity.util.PasswordUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.UUID;

@Service
public class AuthService {

    @Autowired
    private RefreshTokenRepository refreshRepo;

    @Autowired
    private UserRepository repo;

    @Autowired
    private JwtUtil jwt;

    public String register(RegisterRequest r) {
        User u = new User();
        u.setId(UUID.randomUUID());
        u.setEmail(r.getEmail());
        u.setPasswordHash(PasswordUtil.hash(r.getPassword()));
        u.setFullName(r.getFullName());  // ✅
        u.setPhone(r.getPhone());        // ✅
        u.setRole(UserRole.CUSTOMER);
        u.setStatus(UserStatus.ACTIVE);

        repo.save(u);
        return "REGISTERED";
    }
    public LoginResponse login(LoginRequest r) {
        User u = repo.findByEmail(r.getEmail()).orElseThrow();

        if (!PasswordUtil.verify(r.getPassword(), u.getPasswordHash()))
            throw new RuntimeException("Wrong password");

        String accessToken = jwt.generate(u.getId(), u.getRole().name());

        // CREATE REFRESH TOKEN
        String rawRefresh = UUID.randomUUID().toString();

        RefreshToken rt = new RefreshToken();
        rt.setId(UUID.randomUUID());
        rt.setUserId(u.getId());
        rt.setTokenHash(PasswordUtil.hash(rawRefresh));
        rt.setExpiresAt(Instant.now().plusSeconds(7 * 24 * 3600));
        rt.setRevoked(false);

        refreshRepo.save(rt);

        return new LoginResponse(accessToken, rawRefresh);
    }

    public RefreshResponse refresh(String refreshToken) {

        var tokens = refreshRepo.findAll();

        for (RefreshToken t : tokens) {
            if (PasswordUtil.verify(refreshToken, t.getTokenHash())) {

                if (t.isRevoked() || t.getExpiresAt().isBefore(Instant.now()))
                    throw new RuntimeException("Expired");

                User u = repo.findById(t.getUserId()).orElseThrow();

                String newAccess = jwt.generate(u.getId(), u.getRole().name());

                return new RefreshResponse(newAccess);
            }
        }

        throw new RuntimeException("Invalid refresh token");
    }

    public void logout(String refreshToken) {
        var tokens = refreshRepo.findAll();

        for (RefreshToken t : tokens) {
            if (PasswordUtil.verify(refreshToken, t.getTokenHash())) {
                t.setRevoked(true);
                refreshRepo.save(t);
            }
        }
    }
}