class EntreesController < ApplicationController
  respond_to :html, :json, :xml

  def index
    if params[:batiment_id] && @batiment = Batiment.find(params[:batiment_id])
      @entrees = @batiment.entrees
      respond_with @entrees, :location => campus_batiment_url(@batiment.campus, @batiment)
    else
      @entrees = Entree.all
      respond_with @entrees, :location => :root
    end
  end

  def show
    @entree = Entree.find(params[:id])
    respond_with @entree, :location => campus_batiment_url(@entree.batiment.campus, @entree.batiment)
  end

  def create
    @batiment = Batiment.find(params[:batiment_id])
    respond_with(@entree = @batiment.entrees.create(params[:entree]))
  end

  def update
    @entree = Entree.find(params[:id])
    @entree.update_attributes(params[:entree])
    respond_with(@entree.batiment.campus, @entree.batiment, @entree)
  end

  def destroy
    @entree = Entree.find(params[:id])
    @batiment = @entree.batiment
    @campus = @batiment.campus
    respond_with(@campus, @batiment, @entree.destroy)
  end
end
