class Mammal extends Animal {

  String sounds;
  
  public Mammal(String sounds) {
    this.sounds = sounds;
  }

  public String speak() {
    return "Ooh ";
  }

  public String brushHair() {
    return "brush brush";
  }
}