class Item < ApplicationRecord
  belongs_to :category
  before_save :update_alias

  def update_alias
    self.alias = name.parameterize
  end
end
