import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1>To Do List Keeper</h1>
                <div>
                    <NavLink to="/login">Log In</NavLink>
                    <NavLink to="/signup">Sign Up</NavLink>
                    <NavLink to="/todos">Your To Do List</NavLink>
                    <NavLink onClick={this.props.handleLogout} to="/">Sign Out</NavLink>
                </div>
            </div>
        )
    }
}
