package example.codeclan.com.vendingmachine;

import org.junit.Before;
import org.junit.Test;

import static junit.framework.Assert.assertEquals;

/**
 * Created by user on 14/03/2017.
 */

public class TestVendingMachine {

    public VendingMachine vendy;

    @Before
    public void before() {
        vendy = new VendingMachine();
    }

    @Test
    public void testMachineOnHasZeroBalance() {
        assertEquals(0,vendy.balanceInserted());
    }

//    @Test
//    public void testWhenDimeInsertedBalanceIsTenCents() {
//        assertEquals(10, vendy.balanceInserted(Coin.DIME));
//    }


}
