import java.util.Scanner;

public class Console {

  Scanner sc;
  String data;
  Word newword;
  String enteredWord;
  String letter;
  Scanner input;

  public void start() {
    System.out.println("Please enter the word: ");
    sc = new Scanner(System.in);
    data = sc.nextLine();
    System.out.print("\033[H\033[2J");
    System.out.flush();
    Word hiddenWord = new Word(data);
    System.out.println(hiddenWord.hide());
    newword = hiddenWord;
  }

  public void letterGuess() {
    System.out.println("Please guess a letter: ");

    enteredWord = data;
    input = new Scanner(System.in);
    letter = input.nextLine();
    System.out.println("You entered " + letter);

  }

}