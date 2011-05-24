class SearchController < ApplicationController
  def search
    @campuses = Campus.all
    @batiments = Batiment.all
    @services = Service.all
  end

end
