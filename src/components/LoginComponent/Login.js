import React from 'react';



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
        <div id     ="Login">
         <center > <form > 
                <h2 id="titulo">Test Vocacional</h2>
                <h3>Inicio de sesión  {this.state.username +" "+this.state.password }</h3>
                <div>
                <label >
                    Nombre de usuario:
                    </label>
                </div>
                    <input type="text" name="user" id="user" />
                <div>
                    <label>
                    Contraseña:
                    </label>
                </div>
                    <input type="text" name="user" id="pass" />
                <div>
                    <navigator >
                    <input type="submit" value="Ingresar" onClick={this.alerta} id="sub" />
                    
                       {/* // <nav input type="submit" value="Ingresar" onClick></nav> */}
                    </navigator>
                    
                </div>
            </form>
           </center>
        </div> 
        
        )
    }
}

export default Login;











