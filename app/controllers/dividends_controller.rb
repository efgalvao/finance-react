class DividendsController < ApplicationController
  def index
    @dividends = Dividend.all

    render json: @dividends, status: :ok
  end

  def show
    @dividend = Dividend.first

    render json: @dividend, status: :ok
  end
end
