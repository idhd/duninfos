class RemoveUrlToCategories < ActiveRecord::Migration
  def self.up
    remove_column :categories, :url
  end

  def self.down
    add_column :categories, :url, :string
  end
end
