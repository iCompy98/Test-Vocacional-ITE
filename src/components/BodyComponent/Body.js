import React, { Component} from 'react';
import Question_Radio from '../QuestionComponent/Question_Radio';
import './Body.css';
import Login from '../LoginComponent/Login';
import DemoCarousel from '../DemoCarosuelComponent/DemoCarousel';
import Form from '../FormComponent/Form';



class Body extends Component 
{
    render ()
    {
        return(
        /* <div id="cuerpo" pregunta = {Question_Radio}>
            Este es el componente del Body
            
        </div> */

          <Login/>
        // <DemoCarousel id = "carousel"/>
       // <Question_Radio id="preguntas"/>
        //<div></div>
       // <Form/>
        
        );
    }
}

export default Body;
