import React  from 'react' ;
import './Menu.css';
import logo from '../../images/logo-ensenada.png';

import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Login from '../LoginComponent/Login';



class Menu extends React.Component{

    render(){
        return (<div id="menu">
            Este es el componente del Menu
            <img src={logo} id="imagen"/>
            
            

        </div>);
    }
}



export default Menu;