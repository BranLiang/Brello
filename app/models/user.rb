class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable
  has_many :user_boards, dependent: :destroy
  has_many :boards, through: :user_boards
  has_many :lists, through: :boards
end
