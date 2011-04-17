class CreateEntrees < ActiveRecord::Migration
  def self.up
    create_table :entrees do |t|
      t.references :batiment
      t.string :url_photo
      t.boolean :acces_handicape
      t.float :longitude
      t.float :latitude

      t.timestamps
    end
  end

  def self.down
    drop_table :entrees
  end
end
