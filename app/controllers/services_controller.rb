class ServicesController < ApplicationController
  respond_to :html, :json, :xml

  before_filter :auth, :only => [:create, :update, :destroy]

  def index
    if params[:batiment_id] && @batiment = Batiment.find(params[:batiment_id])
      @services = @batiment.services
    else
      @services = Service.all
    end
    respond_with @services
  end

  def show
    @service = Service.find(params[:id])
    respond_with @service
  end

  def create
    @batiment = Batiment.find(params[:batiment_id])
    respond_with(@batiment.campus, @batiment, @service = @batiment.services.create(params[:service]), :location => campus_batiment_path(@batiment.campus, @batiment))
  end

  def edit
    @campuses = Campus.all
    @batiments = Batiment.all
    @categories = Categorie.all
    @service = Service.find(params[:id])
  end

  def update
    @service = Service.find(params[:id])
    @service.update_attributes(params[:service])
    respond_with(@service.batiment.campus, @service.batiment, @service, :location => campus_batiment_path(@service.batiment.campus, @service.batiment))
  end

  def destroy
    @service = Service.find(params[:id])
    @batiment = @service.batiment
    @campus = @batiment.campus
    respond_with(@campus, @batiment, @service.destroy)
  end
end
