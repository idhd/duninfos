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
    render 'shared/parametres'
  end  
end
