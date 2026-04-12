package T2507E.Rentcity.repository;



import T2507E.Rentcity.entity.UserDocument;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface UserDocumentRepository extends JpaRepository<UserDocument, UUID> {
    List<UserDocument> findByUserId(UUID userId);
}