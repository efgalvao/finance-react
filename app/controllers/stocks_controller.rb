class StocksController < ApplicationController
  def index
    # @accounts = Account.where(user_id: params[:id]).order(name: :asc)
    @stocks = Stock.all

    render json: @stocks, status: :ok
  end

  def show
    @stock = Stock.first

    render json: @stock, status: :ok
  end
end
