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

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <Home {...routerProps} />}
            />
            <Route
              path="/login"
              exact
              render={(routerProps) => <LoginPage {...routerProps} />}
            />
            <Route
              path="/signup"
              exact
              render={(routerProps) => <SignUpPage {...routerProps} />}
            />
            <Route
              path="/todos"
              exact
              render={(routerProps) => <ToDoListPage {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}
