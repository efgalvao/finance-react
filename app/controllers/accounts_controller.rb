class AccountsController < ApplicationController
  def index
    # @accounts = Account.where(user_id: params[:id]).order(name: :asc)
    @accounts = Account.all

    render json: @accounts, status: :ok
  end

  def show
    @account = Account.first

    render json: @account, status: :ok
  end
end
