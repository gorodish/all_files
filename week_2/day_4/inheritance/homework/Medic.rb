class Medic < Person

  def heal
    return "all better!"
  end

  def talk(first_name, last_name)
    super + " my name is #{ first_name} #{last_name}!"
  end
  

end