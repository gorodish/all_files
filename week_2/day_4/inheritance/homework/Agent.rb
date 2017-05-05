class Agent < Person

  def talk
    super + "The name's #{last_name}, #{first_name} #{last_name}!"
  end

end