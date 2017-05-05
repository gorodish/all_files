class Thing

  def initialize(person)
    @person = person
  end


  def add_to_people(person)
     @people.push(person)
  end

  def get_number_of()
    @person.count()
  end

end