Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  scope '/api' do
    resources :users, only: [:index, :create, :show]
    resources :accounts, only: [:index, :show]
    # Defines the root path route ("/")
    # root "articles#index"
  end

  # get '*path', to: "application#fallback_index_html", constraints: ->(request) do
  #   !request.xhr? && request.format.html?
  # end
end
