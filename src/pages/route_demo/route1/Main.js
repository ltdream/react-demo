import React from 'react';
import {Link} from 'react-router-dom'

import './index.less'

export default class Main extends React.Component{

    render () {
        return (
            <div>
                This is a main page.
                <Link to="/about">嵌套路由</Link>
                {this.props.children}
            </div>
        )
    }
}