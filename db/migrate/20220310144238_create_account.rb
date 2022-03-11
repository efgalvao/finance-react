class CreateAccount < ActiveRecord::Migration[7.0]
  def change
    create_table :accounts do |t|
      t.string :name, null: false, index: true, unique: true
      t.boolean :savings
      t.references :user, index: true
      t.monetize :balance, null: false, default: 0

      t.timestamps
    end
  end
end
