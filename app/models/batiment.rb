class Batiment < ActiveRecord::Base
  belongs_to :campus
  belongs_to :categorie
  has_many :bornes
  has_many :entrees, :order => "position"
  has_many :services
  has_many :salles
  
  validates :nom,           :presence => true, :uniqueness => true
  validates :url_photo,     :presence => true
  validates :adresse,       :presence => true
  validates :code_postal,  :presence => true
  validates :ville,         :presence => true
  validates :longitude,     :presence => true
  validates :latitude,      :presence => true
end
