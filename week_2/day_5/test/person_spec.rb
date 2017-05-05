require("minitest/autorun")
require("minitest/rg")

require_relative("./person")
require_relative("./thing")

class TestPerson < MiniTest::Test

  def setup
    @person1 = Person.new("Ada", 77)
    @person2 = Person.new("Bob", 24)
    @person3 = Person.new("Dan", 18)
    @people = Thing.new([@person1, @person2, @person3])
  end

  def test_person_name
    assert_equal("Ada", @person1.name)
    assert_equal(18, @person3.age)
    puts @people.inspect

  end

  def test_stuff
    @person4 = Person.new("Rod", 30)
    assert_equal(4, @people.get_number_of())
    # puts "person " + @person.inspect()
    
    # puts "people " + @people.inspect()
  end

  # def test_add_person_to_people()
  #     @people.add_to_people(@person2)
  #     assert_equal(1, @people.get_number_of())
  # end
end