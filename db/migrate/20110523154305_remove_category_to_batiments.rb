class RemoveCategoryToBatiments < ActiveRecord::Migration
  def self.up
    remove_column :batiments, :category_id
  end

  def self.down
    add_column :batiment, :category_id, :integer
  end
end
