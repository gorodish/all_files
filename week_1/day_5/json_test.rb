require 'csv'
require 'json'

myjson = /Users/user/Downloads/PaleontologyResearcherFormat_201608_csv.open(filename, :headers => true).map { |x| x.to_h }