import React, { Component } from 'react';
import { signUpNewUser } from './api-utils.js';

export default class SignUpPage extends Component {
    state = {
        email: '',
        password: ''
    }

    handleEmailChange = (e) => this.setState({ email: e.target.value })
    handlePWChange = (e) => this.setState({ password: e.target.value })
    handleSubmit = async (e) => {
        e.preventDefault();
        const user = await signUpNewUser(this.state.email, this.state.password);
        const token = user.token;
        this.props.handleUserChange(token);
        this.props.history.push('/todos');
    }

    render() {
        return (
            <div>
                <h3>Welcome New User!</h3>
                <p>Getting started is easy, create your account below, and you will be able to add your To Do items right away!</p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input onChange={this.handleEmailChange} /> Email Address
                    </label> <br />
                    <label>
                        <input onChange={this.handlePWChange} /> Password
                    </label> <br />
                    <button>Sumbit</button>
                </form>
            </div >
        )
    }
}
