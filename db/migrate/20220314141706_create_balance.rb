class CreateBalance < ActiveRecord::Migration[7.0]
  def change
    create_table :balances do |t|
      t.monetize :balance
      t.date :date
      t.references :account, foreign_key: true, index:true

      t.timestamps
    end
  end
end
