class RemoveInfosupToSalles < ActiveRecord::Migration
  def self.up
    remove_column :salles, :info_suplementaire
  end

  def self.down
    add_column :salles, :info_suplementaire, :string
  end
end
