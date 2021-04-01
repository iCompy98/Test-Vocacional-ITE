import React, { Component} from 'react';
import Question_Radio from '../QuestionComponent/Question_Radio';
import './Body.css';
import Login from '../LoginComponent/Login';

class Body extends Component {
    render (){
        return(
        /* <div id="cuerpo" pregunta = {Question_Radio}>
            Este es el componente del Body
            
        </div> */

        //<Login/>
        <Question_Radio id="preguntas"/>
        //<div></div>
        
        );
    }
}

export default Body;
