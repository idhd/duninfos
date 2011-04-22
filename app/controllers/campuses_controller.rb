class CampusesController < ApplicationController
  respond_to :html, :json, :xml
  
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
    respond_with(@campus = Campus.create(params[:campus]))
  end
  
  def update
    @campus = Campus.find(params[:id])
    if @campus.update_attributes(params[:campus])
      redirect_to @campus
    else
      render "campuses#edit"
    end
  end
  
  def destroy
    @campus = Campus.find(params[:id])
    @campus.destroy
    redirect_to campuses_url
  end
end
