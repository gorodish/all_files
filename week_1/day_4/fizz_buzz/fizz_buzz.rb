def add_one(number)
  return number + 1
end

def fizz_buzz(number)
  
  multiple_of_3 = number % 3 == 0
  multiple_of_5 = number % 5 == 0

  if (multiple_of_3 && multiple_of_5)
    return "fizz_buzz"
  end
  if (multiple_of_3)
    return "fizz"
  end
  if (multiple_of_5)
    return "buzz"
  end
  return number
end