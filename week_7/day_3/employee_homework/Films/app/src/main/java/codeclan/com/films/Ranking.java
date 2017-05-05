package codeclan.com.films;

/**
 * Created by user on 23/02/2017.
 */

public class Ranking {

    private Film[] films;
    private int rank;

    public Ranking() {
        films = new Film[10];
    }

    public void addFilm(Film film) {
        int index = film.getRanking() -1;
        films[index] = film;
    }

    public int getRank() {
        return this.rank;
    }

    public void setRank(int rank) {
        this.rank = rank;
    }

    public int getSize() {
    int count = 0;
        for(Film film : films) {
            if (film != null) {
                count ++;
            }
        }
        return count;
    }

    public Film getFilmByRanking(int rank) {
        return films[rank - 1];
    }

    public void replaceLastFilm(Film film) {
        film.setRanking(10);
        addFilm(film);
    }

    public Film findFilmByName(String name) {
        for (Film film : films) {
            if (name.equals(film.getTitle())) {
                return film;
            }
        }
        return null;
    }

    public void move(int oldRank, int newRank) {
        Film film1 = getFilmByRanking(newRank);
        Film film2 = getFilmByRanking(oldRank);
        film1.setRanking(oldRank);
        film2.setRanking(newRank);
        addFilm(film1);
        addFilm(film2);
    }
}
