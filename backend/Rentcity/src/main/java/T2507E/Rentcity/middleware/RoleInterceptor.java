package T2507E.Rentcity.middleware;

import jakarta.servlet.http.*;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
public class RoleInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest req,
                             HttpServletResponse res,
                             Object handler) throws Exception {

        String role = (String) req.getAttribute("role");

        if (req.getRequestURI().contains("/admin")) {
            if (!"ADMIN".equals(role)) {
                res.setStatus(403);
                return false;
            }
        }

        return true;
    }
}
