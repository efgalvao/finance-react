class Share < ApplicationRecord
  belongs_to :stock, touch: true

  before_create :set_date, :set_first_price

  scope :past_date, ->(date) { where('date <= ?', date - 7.days) }

  monetize :value_cents

  delegate :user, to: :'stock.account'

  private

  def set_date
    self.date = Date.current unless date
  end

  def set_first_price
    return unless Price.find_by(date: date, stock_id: stock.id).nil?

    Price.create(
      date: date,
      price_cents: value_cents,
      stock: stock
    )
  end
end
