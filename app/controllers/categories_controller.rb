class CategoriesController < ApplicationController
  def index
    # @accounts = Account.where(user_id: params[:id]).order(name: :asc)
    @categories = Category.all

    render json: @categories, status: :ok
  end

  def show
    @category = Category.first

    render json: @category, status: :ok
  end
end
