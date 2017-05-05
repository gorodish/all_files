/**
 * Created by user on 23/02/2017.
 */
package codeclan.com.films;
import java.util.ArrayList;

public class Film {

    private String title;
    private String genre;
    private int ranking;//currentRank

    public Film (String title, String genre, int rank) {
        this.title = title;
        this.genre = genre;
        this.ranking = rank;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getGenre() {
        return this.genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public int getRanking() {
        return ranking;
    }

    public void setRanking(int ranking) {
        this.ranking = ranking;
    }

    @Override
    public String toString() {
        return "Title: " + title + ", " + "Genre: " + genre + ", " + "Ranking: " + ranking;
    }


}