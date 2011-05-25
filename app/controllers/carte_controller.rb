class CarteController < ApplicationController
  respond_to :html
  
  def index
    render 'shared/carte'
  end
  
  def parametres
    render 'shared/parametres'
  end  
end
