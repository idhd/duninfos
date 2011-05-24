class SallesController < ApplicationController
  respond_to :html, :json, :xml

  def index
    if params[:batiment_id] && @batiment = Batiment.find(params[:batiment_id])
      @salles = @batiment.salles
    else
      @salles = Salle.all
    end
    respond_with @salles
  end

  def show
    @salle = Salle.find(params[:id])
    respond_with @salle
  end

  def create
    @batiment = Batiment.find(params[:batiment_id])
    respond_with(@batiment.campus, @batiment, @salle = @batiment.salles.create(params[:salle]))
  end
  
  def edit
    @salle = Salle.find(params[:id])
    @campuses = Campus.all
    @batiments = Batiment.all
  end

  def update
    @salle = Salle.find(params[:id])
    @salle.update_attributes(params[:salle])
    respond_with(@salle.batiment.campus, @salle.batiment, @salle)
  end

  def destroy
    @salle = Salle.find(params[:id])
    @batiment = @salle.batiment
    @campus = @batiment.campus
    respond_with(@campus, @batiment, @salle.destroy)
  end
end
