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

  def update
    @list = current_user.lists.find_by_id(params[:id])
    respond_to do |format|
      if @list&.update(white_list_params)
        format.json { render json: @list.to_json, status: 200 }
      else
        format.json { render json: { error: "List update failed." }, status: "unprocessable_entity" }
      end
    end
  end

  def destroy
    @list = current_user.lists.find_by_id(params[:id])
    respond_to do |format|
      if @list&.destroy
        format.json { render json: { header: 'No content' }, status: 200 }
      else
        format.json { render json: { error: "You are not authorised!" }, status: 401 }
      end
    end
  end

  def show
    @list = current_user.lists.find_by_id(params[:id])
    respond_to do |format|
      if @list
        format.json { render json: @list, status: 200 }
      else
        format.json { render json: { error: 'Not Found' }, status: 404 }
      end
    end
  end

  private
    def white_list_params
      params.require(:list).permit(:board_id, :title)
    end
end
