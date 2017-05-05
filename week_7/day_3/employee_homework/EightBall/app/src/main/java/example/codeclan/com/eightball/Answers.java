package example.codeclan.com.eightball;

import java.util.ArrayList;
import java.util.Random;

/**
 * Created by user on 24/02/2017.
 */

public class Answers implements Answerable {

    protected ArrayList<String> answers;

    public Answers() {
        answers = new ArrayList<String >();
        setupAnswers();
    }

    public Answers(ArrayList<String> answers){
        this.answers = answers;
    }

    public ArrayList<String> getAnswers() {
        return new ArrayList<String>(answers);
    }

    public String getAnswerAtIndex(int index) {
        return answers.get(index);
    }

    public int getLength() {
        return answers.size();
    }

    public void add(String answer) {
        answers.add(answer);
    }

    public String getAnswer() {
        Random rand = new Random();
        int listSize = getLength();
        int index = rand.nextInt(listSize);
        String answer = getAnswerAtIndex(index);
        return answer;
    }

    private void setupAnswers() {
        String[] answersToAdd = {
                "Yes!",
                "That would be an ecumenical matter!",
                "Only if you ask nicely",
                "In an ideal world",
                "That really depends on you",
                "now don't get shirty",
                "Absolutely!",
                "Feck!"
        };

        for(String answer : answersToAdd) {
            add(answer);
        }
    }
}
