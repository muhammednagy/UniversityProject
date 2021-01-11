Rails.application.routes.draw do
  resources :room_messages
  resources :rooms
  root 'pages#home'
  devise_for :users

  resources :room_messages
  resources :rooms
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
