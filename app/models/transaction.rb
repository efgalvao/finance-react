class Transaction < ApplicationRecord
  belongs_to :account

  monetize :value_cents

  before_save :set_date

  validates :title, presence: true
  validates :account_id, presence: true
  validates :kind, presence: true

  enum kind: { expense: 0, income: 1, transfer: 2, investment: 3 }

  scope :expense, -> { where(kind: 'expense') }

  scope :income, -> { where(kind: 'income') }

  delegate :user, to: :account

  def category
    if category_id.nil?
      'No Category'
    else
      Category.find(category_id).name
    end
  end

  def update_balance
    case kind
    when 'income'
      account.update_balance(value)
    when 'expense'
      account.update_balance(-value)
    end
  end

  private

  def set_date
    return if date.present?

    self.date = Date.current
  end
end
