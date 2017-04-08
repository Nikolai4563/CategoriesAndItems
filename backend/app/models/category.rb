class Category < ApplicationRecord
  has_many :items
  before_save :update_alias

  def update_alias
    self.alias = name.parameterize
  end

end
