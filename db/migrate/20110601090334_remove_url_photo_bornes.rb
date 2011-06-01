class RemoveUrlPhotoBornes < ActiveRecord::Migration
  def self.up
    remove_column :bornes, :url_photo
  end

  def self.down
    add_column :bornes, :url_photo, :string
  end
end
