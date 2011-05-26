# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20110526112054) do

  create_table "batiments", :force => true do |t|
    t.integer  "campus_id"
    t.string   "url_photo"
    t.boolean  "acces_wifi"
    t.string   "nom"
    t.string   "adresse"
    t.string   "code_postal"
    t.string   "ville"
    t.float    "longitude"
    t.float    "latitude"
    t.text     "horaires"
    t.text     "info"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "bornes", :force => true do |t|
    t.integer  "batiment_id"
    t.string   "url_photo"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "campuses", :force => true do |t|
    t.string   "nom"
    t.float    "longitude"
    t.float    "latitude"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "categories", :force => true do |t|
    t.string   "nom"
    t.string   "url"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "entrees", :force => true do |t|
    t.integer  "batiment_id"
    t.string   "url_photo"
    t.boolean  "acces_handicape"
    t.float    "longitude"
    t.float    "latitude"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "position"
  end

  create_table "salles", :force => true do |t|
    t.integer  "batiment_id"
    t.integer  "nb_place"
    t.integer  "num_etage"
    t.string   "nom"
    t.boolean  "imprimante"
    t.boolean  "acces_libre"
    t.text     "info"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "services", :force => true do |t|
    t.integer  "batiment_id"
    t.integer  "categorie_id"
    t.string   "nom"
    t.string   "tel"
    t.string   "email"
    t.string   "url_site_web"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
