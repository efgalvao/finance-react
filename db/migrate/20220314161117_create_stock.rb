class CreateStock < ActiveRecord::Migration[7.0]
  def change
    create_table :stocks do |t|
      t.string :name, null: false, index: true
      t.belongs_to :account, null: false, foreign_key: true

      t.timestamps
    end
  end
end
