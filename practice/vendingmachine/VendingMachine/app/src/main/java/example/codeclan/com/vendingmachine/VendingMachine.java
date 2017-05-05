package example.codeclan.com.vendingmachine;

import java.util.ArrayList;

/**
 * Created by user on 24/03/2017.
 */

public class VendingMachine {

    ArrayList<Coins> coins;

    public VendingMachine() {
        coins = new ArrayList<Coins>();
    }

    public int coinsLength() {
        return coins.size();
    }

    public void insertCoin(Coins coin) {
        coins.add(coin);
    }

    public ArrayList<Coins> coinsReturned() {
        ArrayList<Coins> returnedCoins = new ArrayList<Coins>(coins);
        coins.clear();
        return returnedCoins;
    }
}
