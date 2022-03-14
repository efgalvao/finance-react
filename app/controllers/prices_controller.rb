class PricesController < ApplicationController
  def index
    @prices = Price.all

    render json: @prices, status: :ok
  end

  def show
    @price = Price.first

    render json: @price, status: :ok
  end
end
