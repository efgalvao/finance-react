# frozen_string_literal: true

class CreateUser < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email,              null: false, default: ""
      t.string :encrypted_password, null: false, default: ""

    end
  end
end
