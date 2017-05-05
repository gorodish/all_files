package example.codeclan.com.pdatest;

import org.junit.Before;
import org.junit.Test;

import static junit.framework.Assert.assertEquals;

/**
 * Created by user on 10/03/2017.
 */

public class Pda_test {

    Pda Pda;
    Pda func1;

    @Before
    public void before() {
        func1 func = new Pda.func1(1);
    }

    @Test
    public void testFunc1() {
        assertEquals(true, Pda.func1(1));
    }

    @Test
    public void testMax() {
        assertEquals(4, Pda.max(4,2));
    }
}
