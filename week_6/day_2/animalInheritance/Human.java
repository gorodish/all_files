class Human extends Mammal {

  public Human(String sounds) {
    super(sounds);
  }

  public String speak() {
    return super.speak() + sounds;
  }
}