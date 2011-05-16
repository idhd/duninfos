class CarteController < ApplicationController
  respond_to :html
  
  def index
    render 'shared/carte'
  end
  
end
