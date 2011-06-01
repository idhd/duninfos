class Batiment < ActiveRecord::Base
  belongs_to :campus
  has_many :bornes
  has_many :entrees, :order => "position"
  has_many :services
  has_many :categories, :through => :services
  has_many :salles
  
  validates :nom,           :presence => true, :uniqueness => true
  validates :adresse,       :presence => true
  validates :code_postal,  :presence => true
  validates :ville,         :presence => true
  validates :longitude,     :presence => true
  validates :latitude,      :presence => true
  
  has_attached_file :photo,
    :styles => { :small => "150x150>" },
    :url => "/images/:class/:id/:style/:basename.:extension",
    :path => ":rails_root/public/images/:class/:id/:style/:basename.:extension"
  validates_attachment_size :photo, :less_than => 5.megabytes  
  validates_attachment_content_type :photo, :content_type => ['image/jpeg', 'image/png']
end
