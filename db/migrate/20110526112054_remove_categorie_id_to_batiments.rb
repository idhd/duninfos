class RemoveCategorieIdToBatiments < ActiveRecord::Migration
  def self.up
    remove_column :batiments, :categorie_id
  end

  def self.down
    add_column :batiments, :categorie_id, :integer
  end
end
