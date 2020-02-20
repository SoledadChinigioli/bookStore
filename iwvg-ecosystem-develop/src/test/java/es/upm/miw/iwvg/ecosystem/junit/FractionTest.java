package es.upm.miw.iwvg.ecosystem.junit;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class FractionTest {

       private Fraction fraction;

        @BeforeEach
        void before() {
            fraction = new Fraction(2, 3);
        }

        @Test
        void testPointIntInt() {
            assertEquals(2, fraction.getNumerator());
            assertEquals(3, fraction.getDenominator());
        }

        @Test
        void testPointInt() {
            fraction = new Fraction(2, 2);
            assertEquals(2, fraction.getNumerator());
            assertEquals(2, fraction.getNumerator());
        }

        @Test
        void testPoint() {
            fraction = new Fraction(3, 2);
            assertEquals(3, fraction.getNumerator());
            assertEquals(2, fraction.getNumerator());
        }

        @Test
        void testDecimal() {
        assertEquals(0.6, fraction.decimal(), 1);
    }

}
