class CreateSalles < ActiveRecord::Migration
  def self.up
    create_table :salles do |t|
      t.references :batiment
      t.integer :nb_place
      t.integer :num_etage
      t.string :info_suplementaire
      t.string :nom
      t.string :imprimante
      t.boolean :acces_libre
      t.text :info

      t.timestamps
    end
  end

  def self.down
    drop_table :salles
  end
end
