class BornesController < ApplicationController
  respond_to :html, :json, :xml
  
  def index
    if params[:batiment_id] && @batiment = Batiment.find(params[:batiment_id])
      @bornes = @batiment.bornes
    else
      @bornes = Borne.all
    end
    respond_with @bornes
  end
  
  def show
    @borne = Borne.find(params[:id])
    respond_with @borne
  end
  
  def create
    @batiment = Batiment.find(params[:batiment_id])
    respond_with(@batiment.campus, @batiment, @borne = @batiment.bornes.create(params[:borne]))
  end
  
  def update
    @borne = Borne.find(params[:id])
    @borne.update_attributes(params[:borne])
    respond_with(@borne.batiment.campus, @borne.batiment, @borne)
  end
  
  def destroy
    @borne = Borne.find(params[:id])
    @batiment = @borne.batiment
    @campus = @batiment.campus
    respond_with(@campus, @batiment, @borne.destroy)
  end
end
