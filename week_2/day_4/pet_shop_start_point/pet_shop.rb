require_relative('pet')

class PetShop

  def initialize (input_pets)
    @pets = input_pets
  end

  def pet_type(search_name)
    found_pet = @pets.find() { |pet| pet.name == search_name}
  return found_pet.type
  end

  def get_names_of_all_pets_of_type(type_search)
    pets_by_type = @pets.select() { |pet| pet.type == type_search}
    pet_names = pets_by_type.map { |pet| pet.name }
    return pet_names
  end

  def get_number_of_pets_costing_at_least(cost)
    return @pets.count { |pet| pet.price >= cost}
  end 

end