import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Main from '../route1/Main'
import About from '../route1/About'
import Topics from '../route1/Topics'
import Home from './Home'

export default class IRouter extends React.Component{
    render () {
        return (
            <Router>
                <Home>
                    <Route path="/main" render={()=>
                        <Main>
                            <Route path="main/a" component={About}></Route>
                        </Main>
                    }></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topics" component={Topics}></Route>
                </Home>
            </Router>
        )
    }
}