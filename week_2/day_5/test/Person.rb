class Person

attr_reader :name, :age

  def initialize(name, age)
    @name = name
    @age = age
    # @things = []
  end

  def get_number_of
    @people.count()
  end
end