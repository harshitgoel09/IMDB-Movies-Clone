import React from 'react'
// npm uninstall react-router-dom
// npm i react-router-dom@5.3.1
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home'
import Login from './components/Login'
import New from './components/New'
import PageNotFound from './components/PageNotFound'

function App() {
    return (
        <>
            <NavBar></NavBar>
            <Switch>
                <Route path='/home'><Home></Home></Route>
                <Route path='/login'><Login></Login></Route>
                <Route path='/new'><New></New></Route>

                <Redirect from='/' exact to='/home'></Redirect>

                <Route><PageNotFound></PageNotFound></Route>
            </Switch>
        </>
    )
}

export default App