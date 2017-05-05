price = 500
condition = "excellent"

if (price <= 500 && condition == "lexcellent")
  puts "buy the guitar"
else
  puts "don't buy guitar"
end

if (price <= 500 || condition == "excellent")
  puts "buy the guitar"
else
  puts "don't buy the guitar"
end