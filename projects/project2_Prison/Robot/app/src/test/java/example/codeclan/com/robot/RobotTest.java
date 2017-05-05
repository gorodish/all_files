package example.codeclan.com.robot;

import org.junit.Before;
import org.junit.Test;

import static junit.framework.Assert.assertEquals;

/**
 * Created by user on 10/03/2017.
 */

public class RobotTest {
    Robot robot;

    @Before
    public void setUp() throws Exception {
        robot = new Robot("Robby", "Gold", 3);
    }

    @Test
    public void getName() throws Exception {
        assertEquals("Robby", robot.getName());
    }

    @Test
    public void testHoover() throws Exception {
        robot.hoover();
        assertEquals(90, robot.getBatteryLevel());
    }
}
