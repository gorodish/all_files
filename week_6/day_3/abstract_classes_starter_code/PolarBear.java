public class PolarBear extends Bear {
  
  public String gatherFood(){
    return super.gatherFood() + "breaking the ice";
  }
  
  public String hibernate() {
    return "finding a nice igloo to sleep in";
  }
}