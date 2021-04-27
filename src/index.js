const express = require('express');
const morgan = require('morgan');
const path = require('path'); 

const { mongoose } =require('./database');

const app = express();

//Settings
app.set('port', process.env.PORT || 3000 );

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/question" ,require("./routes/task.routes"));

app.use(express.static(path.join(__dirname,"/public")));

app.listen(app.get('port'), ()=> {
  console.log(`Server on port ${app.get('port')}`);
})

/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 */