import React from 'react';


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
        <div >
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
                    <input type="submit" value="Ingresar" onClick={this.alerta} />
                </div>
            </form>
        </div> 
        
        )
    }
}

export default Login;