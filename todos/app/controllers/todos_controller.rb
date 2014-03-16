# todo_controller.rb
class TodosController < ApplicationController

  def index
    @todos = Todo.all
    # render :index
    render json: @todos
  end

  def new

  end

  def create
    @todo = Todo.create(task: params[:task], id: params[:id], complete: params[:complete])
    render json: @todo
  end

  # def show
  #   @todo = Todo.find_by_id(params[:id])
    
  #   redirect_to root_path
  # end

  def update
    
    @todo = Todo.find_by_id(params[:id])
    if @todo.complete == false 
      @todo.update(complete: true)
    else
      @todo.update(complete: false)
    end
    render json: @todo
    
  end

end