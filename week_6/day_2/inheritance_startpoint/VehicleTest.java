import static org.junit.Assert.assertEquals;
import org.junit.Test;
import org.junit.Before;

public class VehicleTest {
  Car car;
  Motorbike motorbike;
  Vehicle vehicle;

  @Before
  public void before(){
    car = new Car(4);
    motorbike = new Motorbike(2);
  }

  @Test
  public void testCarHasFourWheels(){
    assertEquals(4, car.getNumWheels());
  }

  @Test
  public void testMotorbikeHasTwoWheels(){
    assertEquals(2, motorbike.getNumWheels());
  }

  @Test
  public void testCarStartEngine() {
    assertEquals("Vrrm I'm a car", car.startEngine());
  }
}