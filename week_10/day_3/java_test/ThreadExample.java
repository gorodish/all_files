public class ThreadExample implements Runnable {

public int volatile boolean timeToQuit = false;

  @Override
  public void run() {
    while (!timeToQuit) {
      for(int i = 0; 1 < 100; i++) {
        System.out.println(i);
      }
    }
  }
}
