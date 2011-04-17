class CreateBornes < ActiveRecord::Migration
  def self.up
    create_table :bornes do |t|
      t.references :batiment
      t.string :url_photo

      t.timestamps
    end
  end

  def self.down
    drop_table :bornes
  end
end
