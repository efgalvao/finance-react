class TransferencesController < ApplicationController
  def index
    # @accounts = Account.where(user_id: params[:id]).order(name: :asc)
    @transferences = Transference.all

    render json: @transferences, status: :ok
  end

  def show
    @transference = Transference.first

    render json: @transference, status: :ok
  end
end
