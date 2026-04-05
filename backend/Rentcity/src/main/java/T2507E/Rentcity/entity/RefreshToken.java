package T2507E.Rentcity.entity;


import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;
import java.util.UUID;

@Entity
@Table(name = "refresh_tokens")
@Getter @Setter
public class RefreshToken {

    @Id
    private UUID id;

    private UUID userId;

    @Column(name = "token_hash")
    private String tokenHash;

    private Instant expiresAt;

    private boolean revoked;
}