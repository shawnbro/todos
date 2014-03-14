class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :task
      t.boolean :complete, default: false
      t.integer :difficulty
      t.timestamps
    end
  end
end
