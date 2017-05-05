import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import org.junit.*;

public class HangManTest {

  Player player;
  Game game;

  @Before 
  public void before() {
    player = new Player("Player1");
  }

  @Test
   public void hasName() {
     assertEquals("Player1", player.getName());
   }

   @Test
    public void hasLives() {
      assertEquals(0, player.getLives());
  }

   @Test
    public void hasGuess() {
      assertEquals(null, player.guess());
  }
}