class SharesController < ApplicationController
  def index
    # @accounts = Account.where(user_id: params[:id]).order(name: :asc)
    @shares = Share.all

    render json: @shares, status: :ok
  end

  def show
    @share = Share.first

    render json: @share, status: :ok
  end
end
