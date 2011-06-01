class Borne < ActiveRecord::Base
  belongs_to :batiment
  
  has_attached_file :photo,
    :styles => { :small => "150x150" },
    :url => "/images/:class/:id/:style/:basename.:extension",
    :path => ":rails_root/public/images/:class/:id/:style/:basename.:extension"
  validates_attachment_size :photo, :less_than => 5.megabytes  
  validates_attachment_content_type :photo, :content_type => ['image/jpeg', 'image/png']
end
