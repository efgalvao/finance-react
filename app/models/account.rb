class Account < ActiveRecord::Base
  belongs_to :user
  # has_many :stocks, dependent: :destroy
  # has_many :transactions, dependent: :destroy
  # has_many :balances, dependent: :destroy
  # has_many :sender_transference, class_name: 'Transference', foreign_key: 'sender_id', dependent: :destroy
  # has_many :receiver_transference, class_name: 'Transference', foreign_key: 'receiver_id', dependent: :destroy

  monetize :balance_cents

  validates :name, :user, presence: true
  private

end
