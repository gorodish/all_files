require_relative "./space_bounty"
require "pry-byebug"

space_bounty_1 = SpaceBounty.new({ 'name' => 'Jimmy the pirate', 'species' => 'human', 'location' => 'earth', 'bounty' => 5000})

space_bounty_2 = SpaceBounty.new({ 'name' => 'Dave the pirate', 'species' => 'cat', 'location' => 'venus', 'bounty' => 500})

binding.pry

nil