json.id @category.id
json.name @category.name
json.url @category.alias
json.items @category.items, :id, :name, :price, :description, :alias
