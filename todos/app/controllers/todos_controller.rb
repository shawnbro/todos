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
    @todo = Todo.create(task: params[:task])
    render json: @todo
  end

end