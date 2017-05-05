package example.codeclan.com.vendingmachine;

import org.junit.Test;
import org.junit.Before;
import static org.junit.Assert.*;

public class TestVendingMachine {

    VendingMachine machine;
    Coins coins;

    @Before
    public void before(){
        machine = new VendingMachine();
    }

    @Test
    public void testInsertMoney() {
        assertEquals(0, machine.coinsLength());
    }

    @Test
    public void testCoinsInserted() {
        machine.insertCoin(coins.QUARTER);
        assertEquals(1, machine.coinsLength());
    }

    @Test
    public void testCoinsReturned() {
        machine.insertCoin(coins.QUARTER);
        machine.insertCoin(coins.DOLLAR);
        machine.insertCoin(coins.DIME);
        assertEquals(3, machine.coinsReturned().size());
    }

}
