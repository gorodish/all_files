public class GrizzlyBear extends Bear {

  public String gatherFood() {
    return super.gatherFood() + "fishing in the river";
  }

  public String hibernate() {
    return "finding a nice cave to sleep in";
  }
}