class TransactionsController < ApplicationController
  def index
    # @accounts = Account.where(user_id: params[:id]).order(name: :asc)
    @transactions = Transaction.all

    render json: @transactions, status: :ok
  end

  def show
    @transaction = Transaction.first

    render json: @transaction, status: :ok
  end
end
