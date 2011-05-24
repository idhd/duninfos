class Entree < ActiveRecord::Base
  belongs_to :batiment
  acts_as_list :scope => :batiment

def next_entree
  Entree.where(:position => position + 1).first  
end

def previous_entree
  Entree.where(:position => position - 1).first  
end

end
