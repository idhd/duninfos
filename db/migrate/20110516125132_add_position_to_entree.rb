class AddPositionToEntree < ActiveRecord::Migration
  def self.up
    add_column :entrees, :position, :integer
  end

  def self.down
    remove_column :entrees, :position
  end
end
