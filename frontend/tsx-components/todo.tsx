import * as React from 'react';
import axios from 'axios';

interface TodoProps {
    title: string
}

interface TodoState {
    todoItems: TodoItems[]
    todoInputField: string
}

interface TodoItems {
    title: string
    body: string
    done: boolean
}


const fetchTodo = (id: number): Promise<any> => {
    return (
        axios.get(`/todos/${id}`).then((req) => req.data)
    )
}

class Todo extends React.Component<TodoProps, TodoState> {
    constructor(props: TodoProps) {
        super(props);
        this.state = {
            todoItems: [],
            todoInputField: ""
        }
    }

    componentDidMount() {
        this.serveTodos().then((todoItems: TodoItems[]) => {
            this.setState({ todoItems });
        });
    }

    async serveTodos(): Promise<TodoItems[]> {
        const result: TodoItems[] = [];

        let i = 1;
        let isFetching = true;
        while (isFetching) {
            try {
                const todo = await fetchTodo(i);
                result.push(todo);
                i += 1;
            } catch (e) {
                isFetching = false;
            }
        }
        return result;
    }

    get todoList(): JSX.Element {
        let todos = this.state.todoItems.map((todo, idx) => {
            return <li key={idx}>{todo.title} + " : " + {todo.body}</li>
        })

        return <ul>{todos}</ul>
    }

    handleInputTextChange = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        this.setState({ todoInputField: e.currentTarget.value })
    }

    // handleSubmitTodo = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     const updateTodo = this.state.todoItems.concat([this.state.todoInputField]);
    //     this.setState({
    //         todoItems: updateTodo,
    //         todoInputField: ""
    //     })
    // }

    // generateRandomNumber(): Promise<number> {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             const num = Math.random();
    //             if (num > 0.50) {
    //                 resolve(num);
    //             } else {
    //                 reject(num);
    //             }
    //         }, 1000);
    //     });
    // }

    // componentDidMount() {
    //     this.generateRandomNumber().then((num) => {
    //         this.setState({ goodResult: num });
    //     }).catch((num) => {
    //         this.setState({ badResult: num });
    //     })
    // }

    render() {
        return (
            <div>
                <section className="todo-component">
                    <h1>Todo: {this.props.title}</h1>
                    {this.todoList}
                </section>
                <form>
                    Add a todo:<br/>
                    <input type="text" onChange={this.handleInputTextChange} value={this.state.todoInputField} />
                    <input type="submit" />
                </form>

            </div>
        );
    }
}

export default Todo;
