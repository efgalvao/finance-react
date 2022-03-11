class User < ApplicationRecord
  has_many :accounts, dependent: :destroy
  has_many :categories, dependent: :destroy

  validates :name, :email, presence: true

end
