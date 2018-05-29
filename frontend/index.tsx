import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Todo from './tsx-components/todo';
import Navigation from './jsx-components/navigation';

const num1: number = 1;
const num2: number = 2;

class App extends React.Component <any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <section className="main">
                <div className="navigation-div">
                    <Navigation appName={"Todo"} tabs={["HOME", "TODO", "SETTINGS"]} />
                </div>
                <div className="todo-div">
                    <Todo title={"Learn Typescript"} />
                </div>
            </section>
        )
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<App />, document.getElementById('root'));
});



