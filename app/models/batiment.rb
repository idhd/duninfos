class Batiment < ActiveRecord::Base
  belongs_to :campus
  belongs_to :categorie
  has_many :bornes
  has_many :entrees
  has_many :services
end
