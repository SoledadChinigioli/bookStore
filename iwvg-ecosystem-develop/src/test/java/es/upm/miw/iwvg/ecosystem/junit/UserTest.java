package es.upm.miw.iwvg.ecosystem.junit;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class UserTest {
    private User user;

    @BeforeEach
    void before() {
        user = new User(3, "Sol", "Chini");
    }
    @Test
    void testPointInt() {
        user = new User(3, "Sol", "Chini");
        assertEquals(3, user.getNumber());
        assertEquals("Sol", user.getName());
        assertEquals("Chini", user.getFamilyName());

    }

    @Test
    void fullName() {
        assertEquals("Sol Chini", user.fullName());
    }

    @Test
    void initials() {
        assertEquals("S.", user.initials());
    }

}
