class TodosController < ApplicationController
    def index
        render json: Todo.all
    end

    def show
        todo = Todo.find(params[:id])
        render json: todo
    end

    def create
        @todo = Todo.new(todos_params)
        if @todo.save
            render json: @todo
        else
            render json: @todos.errors.full_messages, status: 422
        end
    end

    private

    def todos_params
        params.require(:todo).permit(:title, :body, :done)
    end
end
