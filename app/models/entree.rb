class Entree < ActiveRecord::Base
  belongs_to :batiment
  acts_as_list :scope => :batiment
end
