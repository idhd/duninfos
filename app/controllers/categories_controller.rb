class CategoriesController < ApplicationController
  respond_to :html, :json, :xml
  
  def index
    @categories = Categorie.all
    respond_with @categories
  end
  
  def show
    redirect_to categories_url(params[:id])
  end
  
  def new
    @categorie = Categorie.new
    respond_with @categorie
  end
  
  def edit
    @categorie = Categorie.find(params[:id])
  end
  
  def create
    respond_with(@categorie = Categorie.create(params[:categorie]), :location => categories_path)
  end
  
  def update
    @categorie = Categorie.find(params[:id])
    @categorie.update_attributes(params[:categorie])
    respond_with @categorie, :location => categories_path
  end
  
  def destroy
    @categorie = Categorie.find(params[:id])
    respond_with @categorie.destroy
  end
end
