import React from 'react';
import './App.css';
import Menu from './components/MenuComponent/Menu';
import Title from './components/TitleComponent/Title';
import Body from './components/BodyComponent/Body';
import Question_Radio from './components/QuestionComponent/Question_Radio';


function App() {
  return (
  
  <div id="principal">

    <Menu id="menu"/>
    <div id="often">


      <Title id="title"/>
      <Body id="cuerpo"  />
      
    </div>


    
  </div>
  
  );
}

export default App;
