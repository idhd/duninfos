class AdminController < ApplicationController
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
end
