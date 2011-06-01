class Categorie < ActiveRecord::Base
  has_attached_file :icon,
    :styles => { :small => "80x80" },
    :url => "/images/:class/:id/:style/:basename.:extension",
    :path => ":rails_root/public/images/:class/:id/:style/:basename.:extension"
  validates_attachment_size :icon, :less_than => 5.megabytes  
  validates_attachment_content_type :icon, :content_type => ['image/jpeg', 'image/png']
end
