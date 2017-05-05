import static org.junit.Assert.assertEquals;
import org.junit.Test;
import org.junit.Before;

public class AnimalTest {
  Animal animal;
  Mammal mammal;
  Human human;
  Chimpanzee chimpanzee;

  @Before
  public void before() {
    // animal = new Animal();
    // mammal = new Mammal();
    human = new Human("Hello");
    chimpanzee = new Chimpanzee("OO oo ee ee");
  }

  // @Test
  // public void testAnimalCanEat() {
  //   assertEquals("Nom nom", animal.eat());
  // }

  @Test
  public void testAnimalCanBreathe() {

  }

  @Test
  public void testHumanCanSpeak() {
    assertEquals("Ooh Hello", human.speak());
  }

  @Test
  public void testChimpCanSpeak() {
    assertEquals("Ooh OO oo ee ee", chimpanzee.speak());
  }
}