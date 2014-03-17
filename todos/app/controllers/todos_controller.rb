# todo_controller.rb
class TodosController < ApplicationController

  def index
    @todos = Todo.all
    # render :index
    render json: @todos
  end

  def new
    # @todos = Todo.all.order(:id)
  end

  def show
    @todo = Todo.find_by(id: params[:id])
    render json: @todo
  end


  def create
    @todo = Todo.create(task: params[:task], id: params[:id], complete: params[:complete])
    render json: @todo
  end

  def update
    @todo = Todo.find_by_id(params[:id])
    @todo.update(complete: params[:complete])
    Todo.all.order(:id)
    render json: @todo
  end

  def destroy
    @todo = Todo.find_by_id(params[:id])
    @todos = Todo.all
    @todos.delete(@todo)
    render json: @todos
  end

end