class CardsController < ApplicationController
  def create
    @list = current_user.lists.find_by_id(params[:card][:list_id])
    @card = Card.new(white_list_params)
    respond_to do |format|
      if @list && @card.save
        format.json { render json: @card.to_json, status: 200 }
      else
        format.json { render json: { error: "Card is not valid" }, status: "unprocessable_entity" }
      end
    end
  end


  private
    def white_list_params
      params.require(:card).permit(:title, :list_id, :description)
    end
end
