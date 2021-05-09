import React, {Component} from 'react';
import {render} from 'react-dom';
import Menu from './components/MenuComponent/Menu';
//import App from '../App'

class Main extends Component {
    render(){
        return(
            //<h1>Holaa!</h1>
            <Menu/>
        )
    }
}

render(<Main/>,document.getElementById('root'));