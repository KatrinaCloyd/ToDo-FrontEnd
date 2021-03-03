import React, { Component } from 'react'
import { signInUser } from './api-utils.js';

export default class LoginPage extends Component {
    state = {
        email: '',
        password: ''
    }

    handleEmailChange = (e) => this.setState({ email: e.target.value })
    handlePWChange = (e) => this.setState({ password: e.target.value })
    handleSubmit = async (e) => {
        e.preventDefault();
        const user = await signInUser(this.state.email, this.state.password);
        const token = user.token;
        this.props.handleUserChange(token);
        this.props.history.push('/todos');
    }

    render() {
        return (
            <div>
                <h3>Welcome Returning User!</h3>
                <p>Enter the email and password you set up your account with and we can get to To-Do-ing! </p>
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

