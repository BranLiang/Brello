class BoardsController < ApplicationController
  def create
    @board = current_user.boards.build(white_list_params)
    respond_to do |format|
      if @board.save
        current_user.boards << @board
        format.json { render json: @board.to_json, status: 200 }
      else
        format.json { render json: { :error => @board.errors.full_message }, status: "unprocessable_entity" }
      end
    end
  end

  def show
    @board = current_user.boards.find_by_id(params[:id])
    respond_to do |format|
      if @board
        format.json { render json: @board.to_json(:include => {:lists => {:include => :cards}}), status: 200 }
      else
        format.json { render json: { error: "Not Found" }, status: 404 }
      end
    end
  end

  def index
    @boards = current_user.boards
    respond_to do |format|
      format.json { render json: @boards.to_json, status: 200 }
    end
  end

  def update
    @board = current_user.boards.find_by_id(params[:id])
    respond_to do |format|
      if @board&.update(white_list_params)
        format.json { render json: @board.to_json, status: 200 }
      elsif @board
        format.json { render json: { error: "Update Failed" }, status: "unprocessable_entity" }
      else
        format.json { render json: { error: "Not Found" }, status: 404 }
      end
    end
  end

  def destroy
    @board = current_user.boards.find_by_id(params[:id])
    respond_to do |format|
      if @board&.destroy
        format.json { render json: true, status: 200 }
      else
        format.json { render json: { error: "Not Found" }, status: 404 }
      end
    end
  end

  private
    def white_list_params
      params.require(:board).permit(:name, :description)
    end
end
