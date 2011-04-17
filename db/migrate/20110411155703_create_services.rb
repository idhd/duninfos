class CreateServices < ActiveRecord::Migration
  def self.up
    create_table :services do |t|
      t.references :batiment
      t.references :categorie
      t.string :nom
      t.string :tel
      t.string :email
      t.string :url_site_web

      t.timestamps
    end
  end

  def self.down
    drop_table :services
  end
end
