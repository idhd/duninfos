class AdminController < ApplicationController
  
  before_filter :auth
  
  def new
    @batiments = Batiment.all  
    @campuses = Campus.all    
    @categories = Categorie.all
  end
  
  def edit_campuses
    @campuses = Campus.all
  end
  
  def edit_batiments
    @campuses = Campus.all
    @batiments = Batiment.all
  end
  
  def edit_salles
    @campuses = Campus.all
    @batiments = Batiment.all
    @salles = Salle.all
  end
  
  def edit_entrees_accueil
    @campuses = Campus.all
    @batiments = Batiment.all
  end
  
  def edit_categories
    @categories = Categorie.all
  end
  
  def edit_services
    @campuses = Campus.all
    @batiments = Batiment.all
    @services = Service.all
  end

end
