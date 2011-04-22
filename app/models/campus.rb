class Campus < ActiveRecord::Base
  has_many :batiments
  
  validates :nom,       :presence => true, :uniqueness => true
  validates :latitude,  :presence => true
  validates :longitude, :presence => true
end
