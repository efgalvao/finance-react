class CreatePrice < ActiveRecord::Migration[7.0]
  def change
    create_table :prices do |t|
      t.datetime :date
      t.monetize :price, default: 0, null: false, currency: { present: false }
      t.belongs_to :stock, null: false, foreign_key: true

      t.timestamps
    end
  end
end
