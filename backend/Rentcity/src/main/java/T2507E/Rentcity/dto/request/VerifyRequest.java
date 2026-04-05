package T2507E.Rentcity.dto.request;


import lombok.Data;
import java.util.UUID;

@Data
public class VerifyRequest {
    private UUID documentId;
}