import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Header from './Header.js'
import Home from './Home.js'
import LoginPage from './LoginPage.js'
import SignUpPage from './SignUpPage.js'
import ToDoListPage from './ToDoListPage.js'
import PrivateRoute from './PrivateRoute.js';
import './App.css'
import { getLocalStorage, setLocalStorage } from './storage-utils.js'

export default class App extends Component {
  state = {
    token: getLocalStorage()
  }

  handleUserChange = (token) => {
    this.setState({ token: token })
    setLocalStorage(token);
  }

  handleLogout = () => {
    this.handleUserChange();
  }

  render() {
    return (
      <div>
        <Router>
          <Header handleLogout={this.handleLogout} />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <Home {...routerProps} />}
            />
            <Route
              path="/login"
              exact
              render={(routerProps) => <LoginPage handleUserChange={this.handleUserChange} {...routerProps} />}
            />
            <Route
              path="/signup"
              exact
              render={(routerProps) => <SignUpPage handleUserChange={this.handleUserChange} {...routerProps} />}
            />
            <PrivateRoute
              path="/todos"
              exact
              token={this.state.token}
              render={(routerProps) => <ToDoListPage token={this.state.token} {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}
