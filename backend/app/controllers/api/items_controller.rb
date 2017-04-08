class Api::ItemsController < ApplicationController

  def index
    @items = Item.all
  end

  def show
    @item = Item.find_by_alias(params[:id])
  end

end
