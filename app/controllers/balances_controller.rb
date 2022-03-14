class BalancesController < ApplicationController
  def index
    # @accounts = Account.where(user_id: params[:id]).order(name: :asc)
    @balances = Balance.all

    render json: @balances, status: :ok
  end

  def show
    @balance = Balance.first

    render json: @balance, status: :ok
  end
end
