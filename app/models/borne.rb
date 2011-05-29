class Borne < ActiveRecord::Base
  belongs_to :batiment
  
  has_attached_file :photo,
    # :styles => { :small => "150x150>" },
    :url => "/images/batiments/:id.:extension",
    :path => ":rails_root/public/images/batiments/:id.:extension"
  validates_attachment_size :photo, :less_than => 5.megabytes  
  validates_attachment_content_type :photo, :content_type => ['image/jpeg', 'image/png']
end
