class CreateCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :categories do |t|
      t.string :name, null: false, index: true
      t.references :user, index: true, foreign_key: true

      t.timestamps
    end
  end
end
