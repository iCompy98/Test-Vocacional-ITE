import React from 'react';
import './App.css';
import Menu from './app/components/MenuComponent/Menu.js';
import Title from './app/components/TitleComponent/Title';
import Body from './app/components/BodyComponent/Body';
/* import Question_Radio from './components/QuestionComponent/Question_Radio';
import Login from './components/LoginComponent/Login'; */


function App()
 {
  return (
    
  <div id="principal">
{/* <meta name="viewport" content="width=device-width, initial-scale=0.60"></meta>
    <Menu id="menu"/>
    <div id="often"> */}


      <Title id="title"/>
      <Body id="cuerpo"  />
      
     
    {/* </div> */}


    
  </div>
  
  );
}

export default App;
