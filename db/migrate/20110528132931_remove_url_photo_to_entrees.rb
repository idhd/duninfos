class RemoveUrlPhotoToEntrees < ActiveRecord::Migration
  def self.up
    remove_column :entrees, :url_photo
  end

  def self.down
    add_column :entrees, :url_photo, :string
  end
end
