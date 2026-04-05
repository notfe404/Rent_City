package T2507E.Rentcity.dto.request;



import lombok.Data;

@Data
public class UploadDocumentRequest {
    private String docType;
    private String docNumber;
    private String frontUrl;
    private String backUrl;
}