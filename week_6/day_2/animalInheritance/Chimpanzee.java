class Chimpanzee extends Mammal {

  public Chimpanzee(String sounds) {
    super(sounds);
  }

  public String speak() {
    return super.speak() + sounds;
  }
}