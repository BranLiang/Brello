class ListsController < ApplicationController
  def create
    @board = current_user.boards.find_by_id(params[:list][:board_id])
    @list = List.new(white_list_params)
    respond_to do |format|
      if @board && @list.save
        format.json { render json: @list, status: 200 }
      else
        format.json { render json: { error: "List create failed." }, status: "unprocessable_entity" }
      end
    end
  end

  private
    def white_list_params
      params.require(:list).permit(:board_id, :title)
    end
end
