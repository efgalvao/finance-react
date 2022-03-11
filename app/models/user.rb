class User < ApplicationRecord
  has_many :accounts, dependent: :destroy

  validates :name, :email, presence: true

end
