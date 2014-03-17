# todo.rb
class Todo < ActiveRecord::Base
  has_many :todos, order: 'id DESC'
end