Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  scope '/api' do
    resources :users, only: [:index, :create, :show]
    resources :accounts, only: [:index, :show]
    resources :categories, only: [:index, :show]
    resources :balances, only: [:index, :show]
    resources :transactions, only: [:index, :show]
    resources :transferences, only: [:index, :show]
    resources :stocks, only: [:index, :show]
    resources :shares, only: [:index, :show]
    resources :dividends, only: [:index, :show]
    resources :prices, only: [:index, :show]
    # Defines the root path route ("/")
    # root "articles#index"
  end

  # get '*path', to: "application#fallback_index_html", constraints: ->(request) do
  #   !request.xhr? && request.format.html?
  # end
end
