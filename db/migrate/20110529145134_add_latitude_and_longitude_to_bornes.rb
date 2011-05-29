class AddLatitudeAndLongitudeToBornes < ActiveRecord::Migration
  def self.up
    add_column :bornes, :latitude, :float
    add_column :bornes, :longitude, :float
  end

  def self.down
    remove_column :bornes, :latitude
    remove_column :bornes, :longitude
  end
end
