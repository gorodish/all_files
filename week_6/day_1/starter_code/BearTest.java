import static org.junit.Assert.assertEquals;
import org.junit.Test;
import org.junit.Before;

public class BearTest{
  Bear bear;
  Salmon salmon;
  Salmon nemo;
  Salmon dory;
  Salmon flipper;

  @Before 
  public void before() {
    bear = new Bear("Baloo");
    salmon = new Salmon("john");
    nemo = new Salmon("nemo");
    dory = new Salmon("dory");
    flipper = new Salmon("flipper");
    
  }

  @Test
  public void hasName(){
    assertEquals("Baloo", bear.getName()); 
  }

  @Test
  public void checkEmptyBelly(){
    assertEquals(0, bear.foodCount());
  }

  @Test
  public void testEat() {
    bear.eat(salmon);
    assertEquals(1, bear.foodCount());
  }

  @Test
  public void testInTheWoods(){
    bear.eat(salmon);
    assertEquals(1,bear.foodCount());
    bear.goToWoods();
    assertEquals(0, bear.foodCount());
  }

  @Test
  public void testRemoveDory(){
    bear.eat(nemo);
    bear.eat(dory);
    bear.eat(flipper);
    bear.remove(dory);
    assertEquals(2, bear.foodCount());
  }
}
