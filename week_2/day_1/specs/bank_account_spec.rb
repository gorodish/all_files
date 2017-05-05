require('minitest/autorun')
require('minitest/rg')
require_relative('./BankAccount.rb')

class TestBankAccount < MiniTest::Test

  def test_account_name

    account = BankAccount.new("Murray", 500, "business")
    account_two = BankAccount.new("Dave", 10, "personal")

  assert_equal("Murray", account.account_name)
  assert_equal("Dave", account_two.account_name)

  end

  def test_pay_in_to_account
    account = BankAccount.new("Murray", 500, "business")
    account.pay_in(1000)
    assert_equal(1500, account.balance)
  end

  def test_monthly_fee_business
    account = BankAccount.new("Murray", 500, "business")
    account.pay_monthly_fee("business")
    assert_equal(450, account.balance)
  end

  def test_monthly_fee_personal
    account_two = BankAccount.new("Dave", 10, "personal")
    account_two.pay_monthly_fee("personal")
    assert_equal(490, account_two.balance)
  end

end
