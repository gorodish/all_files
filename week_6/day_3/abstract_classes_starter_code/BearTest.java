import static org.junit.Assert.assertEquals;
import org.junit.*;

public class BearTest {

  PolarBear polarBear;
  GrizzlyBear grizzlyBear;

  @Before 
  public void before() {
    polarBear = new PolarBear();
    grizzlyBear = new GrizzlyBear();
  }

@Test
public void polarCanGatherFood() {
  assertEquals("Gathering food: breaking the ice", polarBear.gatherFood());
}

@Test
public void grizzlyCanGatherFood() {
  assertEquals("Gathering food: fishing in the river", grizzlyBear.gatherFood());
}

@Test
public void canHibernate() {
  assertEquals("finding a nice cave to sleep in", grizzlyBear.hibernate());
  assertEquals("finding a nice igloo to sleep in", polarBear.hibernate());
}
}