class Person

  attr_reader :first_name, :last_name

  def initialize(first_name, last_name)
    @first_name = first_name
    @last_name = last_name
  end

  def talk(first_name, last_name)
    return "Hello, "
  end
  

end