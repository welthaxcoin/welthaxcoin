package investments.welthaxcoin.app.tradingaccount;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TradingAccountRepository extends CrudRepository<TradingAccount, Integer> {
}
