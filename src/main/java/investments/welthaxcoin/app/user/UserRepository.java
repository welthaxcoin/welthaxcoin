package investments.welthaxcoin.app.user;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, String> {
	public Optional<User> findByVerificationCode(String verificationCode);
	public Optional<User> findByReferralId(String referralId);
	public Optional<User> findByEmailAndPassword(String email, String password);
}
