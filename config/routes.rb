Duninfos::Application.routes.draw do

  root :to => "campuses#index" 
  
  resources :campuses do
    collection do
      get 'carte' => "carte#index"
      get 'carte/parametres' => "carte#parametres"
    end
    resources :batiments do
      collection do
        get 'carte' => "carte#index"
        get 'carte/parametres' => "carte#parametres"
      end
      member do
        get 'carte' => "carte#index"
        get 'carte/parametres' => "carte#parametres"
      end
      resources :bornes
      resources :services
      resources :entrees
      resources :salles
    end
  end
  resources :categories
  
  match '/search/' => "search#search"

  match '/login' => 'login#login', :as => :login
  match '/logout' => 'login#logout', :as => :logout

  match '/admin/' => "admin#accueil", :as => :admin_root
  match '/admin/new/' => "admin#new"
  match '/admin/edit/' => "admin#accueil_edit"
  match '/admin/campus/edit' => "admin#edit_campuses"
  match '/admin/batiment/edit' => "admin#edit_batiments"
  match '/admin/salle/edit' => "admin#edit_salles"
  match '/admin/entree/edit' => "admin#edit_entrees"
  match '/admin/borne/edit' => "admin#edit_bornes"
  match '/admin/service/edit' => "admin#edit_services"
  
  #match "/campuses(/:campus_id(/batiments(/:batiment_id)))/carte" => "carte#index"
  
  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => "welcome#index"

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id(.:format)))'
end
