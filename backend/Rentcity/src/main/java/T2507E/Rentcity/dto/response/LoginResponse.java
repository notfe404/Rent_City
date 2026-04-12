package T2507E.Rentcity.dto.response;


import T2507E.Rentcity.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LoginResponse {
    private String accessToken;
    private String refreshToken;
    private User user;
}
