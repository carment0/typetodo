import * as React from 'react';

interface TodoProps {
    title: string
}

interface TodoState {
    completedItems: string[]
    todoItems: string[]
    todoInputField: string
}

class Todo extends React.Component<TodoProps, TodoState> {
    constructor(props: TodoProps) {
        super(props);

        this.state = {
            completedItems: [],
            todoItems: ["clean momo dishes", "feed momo"],
            todoInputField: ""
        }
    }

    get todoList(): JSX.Element {
        let todos = this.state.todoItems.map((todo, idx) => {
            return <li key={idx}>{todo}</li>
        })
        return <ul>{todos}</ul>
    }

    handleInputTextChange = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        this.setState({ todoInputField: e.currentTarget.value })
    }

    handleSubmitTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const updateTodo = this.state.todoItems.concat([this.state.todoInputField]);
        this.setState({
            todoItems: updateTodo,
            todoInputField: ""
        })
    }

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
                <form onSubmit={this.handleSubmitTodo}>
                    Add a todo:<br/>
                    <input type="text" onChange={this.handleInputTextChange} value={this.state.todoInputField} />
                    <input type="submit" />
                </form>

            </div>
        );
    }
}

export default Todo;
