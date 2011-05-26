class BatimentsController < ApplicationController
  respond_to :html, :json, :xml
  
  def index
    if params[:campus_id] && @campus = Campus.find(params[:campus_id])
      if params[:categorie_id] && @categorie = Categorie.find(params[:categorie_id])
        @batiments = Batiment.where(:campus_id => @campus, :categorie_id => @categorie).joins(:entrees)
      else
        @batiments = @campus.batiments
      end
    end
    respond_with(@batiments,:include => :entrees)
  end
  
  def show
    @batiment = Batiment.find(params[:id])
    @entrees = @batiment.entrees
    @services = @batiment.services
    respond_with(@batiment,:include => :entrees)
  end
  
  def edit
    @batiment = Batiment.find(params[:id])
    @campuses = Campus.all
  end
  
  def create
    @campus = Campus.find(params[:campus_id])
    respond_with(@campus, @batiment = @campus.batiments.create(params[:batiment]), :location => campus_path(@campus))
  end
  
  def update
    @batiment = Batiment.find(params[:id])
    @batiment.update_attributes(params[:batiment])
    respond_with(@batiment.campus, @batiment)
  end
  
  def destroy
    @batiment = Batiment.find(params[:id])
    @campus = @batiment.campus
    respond_with(@campus, @batiment.destroy)
  end
end
