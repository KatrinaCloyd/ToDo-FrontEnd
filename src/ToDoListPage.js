import React, { Component } from 'react'
import { getItems, addNewItem, completeItem } from './api-utils.js';

export default class ToDoListPage extends Component {
    state = {
        allUserToDos: [],
        newToDo: '',
        newImportance: ''
    }

    fetchToDos = async () => {
        const userToDos = await getItems(this.props.token);
        this.setState({ allUserToDos: userToDos });
    }

    componentDidMount = async () => {
        this.fetchToDos();
    }

    handleNewItemChange = (e) => this.setState({ newToDo: e.target.value })
    handleNewLevelChange = (e) => this.setState({ newImportance: e.target.value })
    handleSubmit = async (e) => {
        e.preventDefault();
        await addNewItem(this.state.newToDo, this.state.newImportance, this.props.token);
        this.fetchToDos();
        this.setState({ newToDo: '', newImportance: '' })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Enter a New To Do Item: <input value={this.state.newToDo} onChange={this.handleNewItemChange} />
                    </label> <br />
                    <label>
                        Choose the Level of Importance: <br />
                        <select value={this.state.newImportance} onChange={this.handleNewLevelChange}>
                            <option value=''>Choose One</option>
                            <option value='urgent'>Urgent!</option>
                            <option value='high'>High</option>
                            <option value='medium'>Medium</option>
                            <option value='low'>Low</option>
                        </select>
                    </label> <br />
                    <button>Add New Item</button>
                </form>
                {!this.state.allUserToDos.length && <p>Looks like you don't have any To Do items yet!</p>}
                <h3>Here is You To Do List! </h3>
                {this.state.allUserToDos.map(todo =>
                    <p key={todo.todo} className='toDoItem'>
                        {todo.todo}
                    </p>
                )}

            </div>
        )
    }
}
