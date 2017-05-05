def add(a, b)
  return a + b
end

puts add(2,3)

def population(population, area)
  return population / area
end

puts "The population density is #{population(4872000, 51100).to_f}"