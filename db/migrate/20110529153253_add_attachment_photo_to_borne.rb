class AddAttachmentPhotoToBorne < ActiveRecord::Migration
  def self.up
    add_column :bornes, :photo_file_name, :string
    add_column :bornes, :photo_content_type, :string
    add_column :bornes, :photo_file_size, :integer
    add_column :bornes, :photo_updated_at, :datetime
  end

  def self.down
    remove_column :bornes, :photo_file_name
    remove_column :bornes, :photo_content_type
    remove_column :bornes, :photo_file_size
    remove_column :bornes, :photo_updated_at
  end
end
