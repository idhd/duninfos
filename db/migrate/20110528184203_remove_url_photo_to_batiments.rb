class RemoveUrlPhotoToBatiments < ActiveRecord::Migration
  def self.up
    remove_column :batiments, :url_photo
  end

  def self.down
    add_column :batments, :url_photo, :string
  end
end
