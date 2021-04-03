import React from 'react';
import cerebro from '../../icons/cerebro.png'
import usuario from '../../icons/user.png'
import invisible from '../../icons/invisible.png'

import {Link} from "react-router";

class Login extends React.Component 
{
 
    state ={
        username: "",
        password: "",
    }

    alerta = (e) => {

        e.preventDefault();
        this.setState(
            {
                username : document.getElementById("user").value,
                password: document.getElementById("pass").value
            }
        )
    }

    
    render(){
        return (

        
        <div>
          <form > 
               <center><h2 style={{ color: 'white', fontSize: 30 }}>Test Vocacional <img src={cerebro} id="img"/> </h2> </center>
    
                <h3 style={{ color: 'white', fontSize: 25}}>¡Hola Amigo(a)!  {this.state.username +" "+this.state.password }</h3>
                <div>
                <label  style={{paddingRight:20, color:'blue', fontStyle:'bold', fontSize:20}}>
                    CURP:
                    </label>
                
                    <input type="text" name="user" id="user" /> <img src={usuario} id="img"/>
                    </div>
                <div>
                    <label style={{paddingRight:20, color:'blue', fontStyle:'bold', fontSize:20}}>
                    Contraseña:
                    </label>
               
                    <input type="text" name="user" id="pass" /> <img src={invisible} id="img"/>
                    </div>
                <div>
                    <navigator >
                    <center> <input type="submit" value="Ingresar" onClick={this.alerta} id="sub" style={{backgroundColor:'white', fontSize:20}}/></center>
                    
                       {/* // <nav input type="submit" value="Ingresar" onClick></nav> */}
                    </navigator>
                    
                </div>
            </form>
        </div> 
        
        )
    }
}

export default Login;











