class CarteController < ApplicationController
  respond_to :html
  
  def index
    if params[:campus_id] && params[:id]
      @batiment = Batiment.find(params[:id])
    else
      @campus = Campus.find(params[:campus_id])
    end
    
    render 'shared/carte'
  end
  
  def parametres
    if params[:campus_id] && params[:id]
      @batiment = Batiment.find(params[:id])
    else
      @campus = Campus.find(params[:campus_id])
    end

    @categories = Categorie.all
    
    if params[:submit_params]
      session[:parametres] = {
        'batimentsUds' => params[:batimentsUds]
        
      }
      
      if params[:campus_id] && params[:batiment_id] && params[:id]
        redirect_to campus_batiment_entrees_carte_path(params[:id])
      elsif params[:campus_id] && params[:id]
        redirect_to carte_campus_batiment_path(params[:campus_id], params[:id])
      else
        redirect_to campus_batiments_carte_path(params[:id])
      end
    else
    
      respond_to do |f|
          f.html { render 'shared/parametres' }
          f.json { render :json => session[:parametres] }
      end
    end
  end
end
