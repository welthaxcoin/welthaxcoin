package investments.welthaxcoin.app.user;

import java.io.UnsupportedEncodingException;
import java.util.Optional;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import investments.welthaxcoin.app.account.Account;
import investments.welthaxcoin.app.account.AccountService;
import investments.welthaxcoin.app.mailsender.MailSenderService;
import investments.welthaxcoin.app.tradingaccount.TradingAccount;
import investments.welthaxcoin.app.tradingaccount.TradingAccountService;
import net.bytebuddy.utility.RandomString;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private JavaMailSender mailSender;

	@Autowired
	AccountService accountService;
	@Autowired
	MailSenderService mailSenderService;
	@Autowired
	TradingAccountService tradingAccountService;

	public User addUser(User user) {
		if (checkUser(user.getEmail())) {
			return new User();
		}
		String randomCode = RandomString.make(6);
		user.setVerificationCode(randomCode);
		user.setReferralId(user.getFullName().replaceAll(" ", "") + "-" + randomCode);
		if (user.getReferral() != null) {
			Optional<User> userReferral = userRepository.findByReferralId(user.getReferral().getReferralId());
			if (userReferral.isPresent()) {
				user.setReferral(userReferral.get());
			} else {
				User wrongReferral = new User();
				wrongReferral.setReferral(user.getReferral());
				return wrongReferral;
			}
		}

//		try {
//			sendVerificationEmail(user);
//		} catch (MessagingException e) {
//			e.printStackTrace();
//		} catch (UnsupportedEncodingException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
		Account account = new Account();
		TradingAccount tradingAccount = new TradingAccount();

		accountService.addAccount(account);
		user.setAccount(account);
		tradingAccountService.addTradingAccount(tradingAccount);
		user.setTradingAccount(tradingAccount);
		return userRepository.save(user);
	}

	public Optional<User> getUser(String email) {
		return userRepository.findById(email);
	}

	public User updateUser(User user) {
		return userRepository.save(user);
	}

	private void sendVerificationEmail(User user) throws MessagingException, UnsupportedEncodingException {
		String toAddress = user.getEmail();
		String subject = "Cryptospace Assets (One time password)";
		String content = " <div>\n" + "        <style>\n" + "            #container {\n"
				+ "                padding: 12px; font-family: Arial, Helvetica, sans-serif;\n" + "            }\n"
				+ "            @media only screen and (min-width: 800px) {\n" + "              #container {\n"
				+ "                padding: 10% 35%;\n" + "              }\n" + "            }\n"
				+ "          </style>\n"
				+ "        <div id=\"container\" style=\"box-shadow: 1px 1px 10px rgb(236, 236, 236);\">\n"
				+ "            <div style=\"\n" + "                 padding: 8px 16px;\n"
				+ "                 background-color: rgb(0, 50, 235);\n" + "                 color: white;\n"
				+ "                 font-family: Arial, Helvetica, sans-serif;\n" + "               \">\n"
				+ "                <p style=\"font-size: 20px; font-weight: bold;\">\n"
				+ "                    Cryptospace Assets\n" + "                </p>\n" + "            </div>\n"
				+ "            <div style=\"\n" + "                 padding: 12px;\n"
				+ "                 font-family: Arial, Helvetica, sans-serif;\n"
				+ "                 margin-top: 0px;\n" + "               \">\n"
				+ "                <p style=\"font-weight: 600; font-size: 18px\">\n"
				+ "                    Confirm your Registration\n" + "                </p>\n"
				+ "                <p style=\"font-size: 14px; color: rgb(34, 34, 34)\">\n"
				+ "                    Welcome to Cryptospace Assets\n" + "                </p>\n"
				+ "                <p style=\"font-size: 14px; color: rgb(34, 34, 34)\">\n"
				+ "                    Here is your account activation code\n" + "                </p>\n"
				+ "                <p style=\"color: rgb(0, 50, 235); font-weight: 600\">" + user.getVerificationCode()
				+ "</p>\n"
				+ "                <p style=\"font-size: 14px; font-weight: bold; color: rgb(34, 34, 34)\">\n"
				+ "                    Security tips:\n" + "                </p>\n" + "                <ol style=\"\n"
				+ "                   font-size: 14px;\n" + "                   font-weight: bold;\n"
				+ "                   padding-left: 20px;\n" + "                   color: rgb(54, 54, 54);\n"
				+ "                   line-height: 18px;\n" + "                 \">\n"
				+ "                    <li>Never give your password to anyone</li>\n" + "                    <li>\n"
				+ "                        Never call any phone number for someone claiming to be Cryptospace Assets\n"
				+ "                        Support\n" + "                    </li>\n" + "                    <li>\n"
				+ "                        Never send any money to anyone claiming to be a member of\n"
				+ "                        Cryptospace Assets team\n" + "                    </li>\n"
				+ "                    <li>Enable Google Two Factor Authentication.</li>\n" + "                </ol>\n"
				+ "                <p style=\"font-size: 12px; color: rgb(34, 34, 34)\">\n"
				+ "                    If you don't recognize this activity, please contact our customer\n"
				+ "                    support immediately.\n" + "                </p>\n"
				+ "                <p style=\"font-size: 12px; color: rgb(34, 34, 34)\">Cryptospace Assets Team</p>\n"
				+ "                <p style=\"font-size: 12px; color: rgb(34, 34, 34)\">\n"
				+ "                    This is an automated message, Please do not reply\n" + "                </p>\n"
				+ "            </div>\n" + "        </div>\n" + "    </div>";

		mailSenderService.sendEmail(toAddress, subject, content);
	}

	private boolean checkUser(String email) {
		return userRepository.existsById(email);
	}

	public boolean resend(String email) {
		Optional<User> user = userRepository.findById(email);
//		try {
//			sendVerificationEmail(user.get());
//		} catch (UnsupportedEncodingException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		} catch (MessagingException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
		return true;
	}

	public boolean verify(String verificationCode) {
		// Optional<User> user = userRepository.findByVerificationCode(verificationCode);
		// if (user.isEmpty() || user.get().isActive()) {
		// 	return false;
		// } else {
		// 	user.get().setVerificationCode(null);
		// 	user.get().setActive(true);
		// 	userRepository.save(user.get());
		// 	return true;
		// }
		return true;
	}

	public User signIn(String email, String password) {
		// Optional<User> user = userRepository.findByEmailAndPassword(email, password);
		// if (user.isEmpty()) {
		// 	return new User();
		// }
		return new User();
	}

}
