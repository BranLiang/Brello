class CardsController < ApplicationController
  def create
    respond_to do |format|
      @list = current_user.lists.find_by_id(params[:card][:list_id])

      if @list && @card = Card.create(white_list_params)
        format.json { render json: @card.to_json, status: 200 }
      else
        format.json { render json: { error: "Card is not valid" }, status: "unprocessable_entity" }
      end
    end
  end

  def destroy
    respond_to do |format|
      @card = current_user.cards.find_by_id(params[:id])
      if @card&.destroy
        format.json { render json: true, status: 200 }
      else
        format.json { render json: { error: "Not Found" }, status: 404 }
      end
    end
  end


  private
    def white_list_params
      params.require(:card).permit(:title, :list_id, :description)
    end
end
