import React from 'react';



import {Link} from "react-router";

class Login extends React.Component {
 
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
            <form > 
                <h3>Inicio de sesión  {this.state.username +" "+this.state.password }</h3>
                <div>
                <label >
                    Nombre de usuario:
                    </label>
                </div>
                    <input type="text" name="user" id="user" />
                <div>
                    <label>
                    Contraseña
                    </label>
                </div>
                    <input type="text" name="user" id="pass" />
                <div>
                    <navigator >
                    <input type="submit" value="Ingresar" onClick={this.alerta} />
                    
                       {/* // <nav input type="submit" value="Ingresar" onClick></nav> */}
                    </navigator>
                    
                </div>
            </form>
        </div> 
        
        )
    }
}

export default Login;











