package codeclan.com.films;
import static org.junit.Assert.assertEquals;
import org.junit.*;
/**
 * Created by user on 23/02/2017.
 */

public class TestRanking {

    private Ranking rank;
    private Film film1;
    private Film film2;
    private Film film3;

    @Before
    public void before() {
        rank = new Ranking();
        film1 = new Film("Vertigo", "Suspense", 1);
        film2 = new Film("Citizen Kane", "Drama", 10);
        film3 = new Film("Star Wars", "Sci-fi", 9);
        rank.addFilm(film1);

    }

    public void testAddFilm() {
        assertEquals(1, rank.getSize());
    }

    @Test
    public void getFilmAtRank() {
        Film film = rank.getFilmByRanking(1);
        assertEquals("Vertigo", film.getTitle());
    }

    @Test
    public void testReplaceLastFilm() {
        rank.addFilm(film2);
        rank.replaceLastFilm(film3);
        Film film = rank.getFilmByRanking(10);
        assertEquals("Star Wars", film.getTitle());
    }

    @Test
    public void testFindFilmByName() {
        Film film = rank.findFilmByName("Citizen Kane");
        assertEquals("Citizen Kane", film.getTitle());
    }

    @Test
    public void testMoveFilmUp() {
        rank.addFilm(film2);
        rank.addFilm(film3);
        rank.move(10, 9);
        Film film = rank.getFilmByRanking(9);
        assertEquals("Citizen Kane", film.getTitle());
    }
}
