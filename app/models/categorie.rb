class Categorie < ActiveRecord::Base
  has_attached_file :icon,
    :styles => { :default => "50x50" },
    :url => "/images/categories/:id.:extension",
    :path => ":rails_root/public/images/categories/:id.:extension"
  validates_attachment_size :icon, :less_than => 5.megabytes  
  validates_attachment_content_type :icon, :content_type => ['image/jpeg', 'image/png']
end
