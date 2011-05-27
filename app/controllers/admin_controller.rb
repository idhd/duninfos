class AdminController < ApplicationController
  
  before_filter :auth
  
  def new
    if params[:campus_id] && @campus = Campus.find(params[:campus_id])
      if params[:categorie_id] && @categorie = Categorie.find(params[:categorie_id])
        @batiments = Batiment.where(:campus_id => @campus, :categorie_id => @categorie)
      end
    else
      @batiments = Batiment.all  
    end
    
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
  def edit_entrees_accueil
    @campuses = Campus.all
    @batiments = Batiment.all
  end

end
