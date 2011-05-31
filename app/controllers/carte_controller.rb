class CarteController < ApplicationController
  respond_to :html
  
  def index
    if session[:parametres]["submit"] == nil
      categories = Categorie.all
      session[:parametres] = {}
      categories.each do |categorie|
        session[:parametres][categorie.id] = "on"
      end
      session[:parametres]["bornes"] = "on"
    end
    
    
    if params[:campus_id] && params[:batiment_id]
      @batiment = Batiment.find(params[:batiment_id])
      @entrees = @batiment.entrees
    elsif params[:campus_id] && params[:id]
      @batiment = Batiment.find(params[:id])
    else
      @campus = Campus.find(params[:campus_id])
    end
    
    render 'shared/carte'
  end
  
  def parametres
    if params[:campus_id] && params[:batiment_id]
      @batiment = Batiment.find(params[:batiment_id])
      @entrees = @batiment.entrees
    elsif params[:campus_id] && params[:id]
      @batiment = Batiment.find(params[:id])
    else
      @campus = Campus.find(params[:campus_id])
    end

    @categories = Categorie.all
   
    if params[:parametres]
      session[:parametres] = params[:parametres]
            
      if params[:campus_id] && params[:batiment_id]
        redirect_to carte_campus_batiment_entrees_path(params[:batiment_id])
      elsif params[:campus_id] && params[:id]
        redirect_to carte_campus_batiment_path(params[:campus_id], params[:id])
      else
        redirect_to carte_campus_batiments_path(params[:id])
      end
    else
      @parametres = session[:parametres]
      respond_to do |f|
          f.html { render 'shared/parametres' }
          f.json { render :json => session[:parametres] }
      end
    end
  end
end
