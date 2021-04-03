import React, {Button} from 'react';
import { Link } from 'react-router-dom';


class Login extends React.Component {

    state ={
        username: "",
        password: "",
    }


    cambio= () => {
        console.log("Hola!");
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
        <div id="hola">
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
                    <input type="text" name="user" id="pass"  />
                <div>
                    <Link to="/Cuestionario">
                        <a >
                            Insertar
                        </a>
                    </Link>
                </div>
            </form>
        </div> 
        
        )
    }
}

export default Login;