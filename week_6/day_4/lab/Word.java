public class Word {
  
  String word;
  private StringBuilder hiddenWord;

  public Word(String word) {
    this.word = word;
  }

  public String hide() {
    hiddenWord = new StringBuilder();
    for (char character : word.toCharArray()) {
      hiddenWord.append("*");
    }

    return hiddenWord.toString();
  }


  // public String example() {
  //   hiddenWord = new StringBuilder("Hello");
  //   hiddenWord.append(" world");
  //   return hiddenWord.toString();
  // }
}