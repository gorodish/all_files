package codeclan.com.films;
import android.media.audiofx.Equalizer;

import static org.junit.Assert.assertEquals;
import org.junit.*;

/**
 * Created by user on 23/02/2017.
 */

public class TestFilm {

    Film film1;

    @Before
    public void before() {
        film1 = new Film("Vertigo", "Suspense", 0);
    }

    @Test
    public void filmHasTitle() {
        assertEquals("Vertigo", film1.getTitle());
    }

    @Test
    public void canSetTitle() {
        film1.setTitle("2001 A Space Odyssey");
        assertEquals("2001 A Space Odyssey", film1.getTitle());
    }

    @Test
    public void getGenre() {
        assertEquals("Suspense", film1.getGenre());
    }

    @Test
    public void canSetGenre() {
        film1.setGenre("Comedy");
        assertEquals("Comedy", film1.getGenre());
    }

    @Test
    public void canSetRanking() {
        film1.setRanking(1);
        assertEquals(1, film1.getRanking());
    }

    @Test
    public void testFilmToString() {
        assertEquals("Title: Vertigo, Genre: Suspense, Ranking: 0", film1.toString());
    }
}