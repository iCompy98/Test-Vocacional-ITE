import React from 'react';
import cerebro from '../../icons/cerebro.png'
import usuario from '../../icons/user.png'
import invisible from '../../icons/invisible.png'

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
                <label  style={{paddingRight:100, color:'#1155cc', fontWeight:'bold', fontSize:30}}>
                    CURP:
                    </label>
                
                    <input type="text" name="user" id="user" style={{fontSize:30}}/> <img src={usuario} id="img" />
                    </div>
                <div>
                    <label style={{paddingRight:20, color:'#1155cc', fontWeight:'bold', fontSize:30}}>
                    Contraseña:
                    </label>
               
                    <input type="text" name="user" id="pass" style={{fontSize:30}}/> <img src={invisible} id="img"/>
                    </div>

                    <div><text style={{paddingLeft: 380, color: 'blue'}}  >¿Olvidaste tu contraseña?</text></div>
                <div>
                    <navigator >
                    <center> <input type="submit" value="Ingresar" onClick={this.alerta} id="sub" style={{backgroundColor:'white', fontSize:20}}/></center>
                    <div><label>¿No tienes cuenta? Regístrate</label>
                    </div>
                       {/* // <nav input type="submit" value="Ingresar" onClick></nav> */}
                    </navigator>
                    
                </div>
            </form>
        </div> 
        
        )
    }
}

export default Login;











