require("minitest/autorun")
require("minitest/rg")

require_relative("../Bus")
require_relative("../Person")

class TestBus < MiniTest::Test

  def setup
    @bus = Bus.new(22, "St Enoch Square")
    @Passenger1 = Person.new("Iggy", 101)
    @Passenger1 = Person.new("Lars", 40)

  end

  def test_bus_number
    assert_equal(22, @bus.route_number)
  end

  def test_destination
    assert_equal("St Enoch Square", @bus.destination)
  end

  def test_drive_bus
    assert_equal("Brum Brum", @bus.drive)
  end

  def test_bus_passengers
    assert_equal(Array.new(), @bus.passengers)
  end

  def test_initial_passengers
    assert_equal(0, @bus.get_number_of_passengers())
  end

  def test_add_passenger_to_bus
    @bus.pick_up(@Passenger1)
    assert_equal(1, @bus.get_number_of_passengers())
  end

  def test_drop_off_passenger
    @bus.pick_up(@Passenger2)
    @bus.drop_off(@Passenger2)
    assert_equal(0, @bus.get_number_of_passengers())
  end

  def test_empty_bus
    @bus.pick_up(@Passenger1)
    @bus.pick_up(@Passenger1)
    @bus.get_aff()
    assert_equal(0, @bus.get_number_of_passengers())
  end
end