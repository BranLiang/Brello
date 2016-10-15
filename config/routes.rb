Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#index"
  get "/home", to: "static_pages#home"

  scope :api do
    scope :v1 do
      resources :boards, only: [:index, :create, :destroy, :update, :show]
    end
  end
end
