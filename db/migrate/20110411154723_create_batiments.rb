class CreateBatiments < ActiveRecord::Migration
  def self.up
    create_table :batiments do |t|
      t.references :campus
      t.references :categorie
      t.string :url_photo
      t.boolean :acces_wifi
      t.string :nom
      t.string :adresse
      t.string :code_postal
      t.string :ville
      t.float :longitude
      t.float :latitude
      t.text :horaires
      t.text :info

      t.timestamps
    end
  end

  def self.down
    drop_table :batiments
  end
end
