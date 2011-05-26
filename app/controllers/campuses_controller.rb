class CampusesController < ApplicationController
  respond_to :html, :json, :xml
  
  before_filter :auth, :only => [:create, :update, :destroy]
  
  def index
    @campuses = Campus.all
    respond_with @campuses
  end
  
  def show
    redirect_to campus_batiments_url(params[:id])
  end
  
  def new
    @campus = Campus.new
    respond_with @campus
  end
  
  def edit
    @campus = Campus.find(params[:id])
  end
  
  def create
    respond_with(@campus = Campus.create(params[:campus]), :location => campuses_path)
  end
  
  def update
    @campus = Campus.find(params[:id])
    @campus.update_attributes(params[:campus])
    respond_with @campus
  end
  
  def destroy
    @campus = Campus.find(params[:id])
    respond_with @campus.destroy
  end
end
