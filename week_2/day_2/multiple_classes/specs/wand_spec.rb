require('minitest/autorun')
require_relative('../Wand')
require("minitest/rg")

class TestWizard < MiniTest::Test

  def setup
    @elder_wand = Wand.new("Holly", "Phoenix Feather")
  end

  def test_wand_wood_type
    assert_equal("Holly", @elder_wand.wand_wood)
  end

end