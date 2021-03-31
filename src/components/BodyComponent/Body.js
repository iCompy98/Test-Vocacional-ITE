import React, { Component} from 'react';
import Question_Radio from '../QuestionComponent/Question_Radio';
import './Body.css';

class Body extends Component {
    render (){
        return(
        <div id="cuerpo" pregunta = {Question_Radio}>
            Este es el componente del Body
            

        </div>
        
        );
    }
}

export default Body;
