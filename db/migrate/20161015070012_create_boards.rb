class CreateBoards < ActiveRecord::Migration[5.0]
  def change
    create_table :boards do |t|
      t.string :name, null: false, default: ""
      t.text   :description

      t.timestamps
    end
  end
end
