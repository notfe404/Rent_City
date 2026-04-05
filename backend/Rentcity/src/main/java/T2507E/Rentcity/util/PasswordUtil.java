package T2507E.Rentcity.util;


import org.mindrot.jbcrypt.BCrypt;

public class PasswordUtil {

    public static String hash(String password) {
        return BCrypt.hashpw(password, BCrypt.gensalt());
    }

    public static boolean verify(String raw, String hash) {
        return BCrypt.checkpw(raw, hash);
    }
}