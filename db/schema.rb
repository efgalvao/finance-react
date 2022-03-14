# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_03_14_163306) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accounts", force: :cascade do |t|
    t.string "name", null: false
    t.boolean "savings"
    t.bigint "user_id"
    t.integer "balance_cents", default: 0, null: false
    t.string "balance_currency", default: "USD", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_accounts_on_name"
    t.index ["user_id"], name: "index_accounts_on_user_id"
  end

  create_table "balances", force: :cascade do |t|
    t.integer "balance_cents", default: 0, null: false
    t.string "balance_currency", default: "USD", null: false
    t.date "date"
    t.bigint "account_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["account_id"], name: "index_balances_on_account_id"
  end

  create_table "categories", force: :cascade do |t|
    t.string "name", null: false
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_categories_on_name"
    t.index ["user_id"], name: "index_categories_on_user_id"
  end

  create_table "shares", force: :cascade do |t|
    t.datetime "date"
    t.integer "value_cents", default: 0, null: false
    t.bigint "stock_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["stock_id"], name: "index_shares_on_stock_id"
  end

  create_table "stocks", force: :cascade do |t|
    t.string "name", null: false
    t.bigint "account_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["account_id"], name: "index_stocks_on_account_id"
    t.index ["name"], name: "index_stocks_on_name"
  end

  create_table "transactions", force: :cascade do |t|
    t.bigint "account_id", null: false
    t.bigint "category_id"
    t.integer "value_cents", default: 0, null: false
    t.integer "kind", default: 0, null: false
    t.string "title", null: false
    t.date "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["account_id"], name: "index_transactions_on_account_id"
    t.index ["category_id"], name: "index_transactions_on_category_id"
  end

  create_table "transferences", force: :cascade do |t|
    t.bigint "sender_id"
    t.bigint "receiver_id"
    t.bigint "user_id"
    t.date "date"
    t.integer "amount_cents", default: 0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["receiver_id"], name: "index_transferences_on_receiver_id"
    t.index ["sender_id"], name: "index_transferences_on_sender_id"
    t.index ["user_id"], name: "index_transferences_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
  end

  add_foreign_key "balances", "accounts"
  add_foreign_key "categories", "users"
  add_foreign_key "shares", "stocks"
  add_foreign_key "stocks", "accounts"
  add_foreign_key "transactions", "accounts"
  add_foreign_key "transactions", "categories"
  add_foreign_key "transferences", "users"
end
