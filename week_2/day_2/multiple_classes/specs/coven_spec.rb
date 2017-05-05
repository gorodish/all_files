require('minitest/autorun')
require_relative('../wizard')
require_relative('../Wand')
require_relative('../Coven')
require("minitest/rg")



@elder_wand = Wand.new("Holly", "Phoenix Feather")
@broken_wand = Wand.new("Oak", "Unicorn hair")
@elm_wand = Wand.new("Elm", "Dragon HeartString")

@harry = Wizard.new("Harry", @elder_wand)
@ron = Wizard.new("Ron", @broken_wand)
@hermione = Wizard.new("Hermione", @elm_wand)

coven_1 = Coven.new([@harry, @ron, @hermione])
coven_1.cast_spell("Leviosa")
