package T2507E.Rentcity.entity;


import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Entity
@Table(name = "user_documents")
@Getter @Setter
public class UserDocument {

    @Id
    private UUID id;

    private UUID userId;
    private String docType;
    private String docNumber;

    private String frontUrl;
    private String backUrl;

    private boolean verified;
}
