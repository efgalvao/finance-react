class UsersController < ApplicationController
  def index
    # @accounts = Account.where(user_id: params[:id]).order(name: :asc)
    @accounts = Account.select('id, name, balance_cents').all

    render json: @accounts, status: :ok
  end

  def summary
    @user = current_user
  end
end
