class BatimentsController < ApplicationController
  def index
    if params[:categorie_id] && @categorie = Categorie.find(params[:categorie_id])
      @campus = Campus.find(params[:campus_id])
      @batiments = Batiment.where(:campus_id => @campus, :categorie_id => @categorie)
    else
      @campus = Campus.find(params[:campus_id])
      @batiments = @campus.batiments
    end
  end
  
  def show
    @batiment = Batiment.find(params[:id])
    @entrees = @batiment.entrees
    @services = @batiment.services
  end
end
