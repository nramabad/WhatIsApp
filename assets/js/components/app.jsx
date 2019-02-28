import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home'
import Login from './login'
// // import Signup from './components/signup'
import { AuthRoute, PrivateRoute } from '../utils/route_utils'


class App extends Component {
    render() {
        return (
            <Switch>
                    <Route exact path="/" component={Home} />
                    <AuthRoute path='/login' component={Login} />
                    <PrivateRoute path='/private' component={Home} />
            </Switch>)
    }
}

export default App;