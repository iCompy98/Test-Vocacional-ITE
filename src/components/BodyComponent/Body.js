import React, { Component} from 'react';
import Question_Radio from '../QuestionComponent/Question_Radio';
import './Body.css';
import Login from '../LoginComponent/Login';
import { BrowserRouter, Route } from 'react-router-dom';

class Body extends Component {
    render (){
        return(
        /* <div id="cuerpo" pregunta = {Question_Radio}>
            Este es el componente del Body
            
        </div> */

        //<Login/>
//        <Question_Radio id="preguntas"/>
        //<div></div>
        <BrowserRouter>
              <Route path="/Cuestionario" component={ Question_Radio }  />
              <Route path="/Login" component={Login} />
        
        </BrowserRouter>
        
        );
    }
}

export default Body;
