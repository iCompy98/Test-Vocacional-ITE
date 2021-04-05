import React, {useState} from 'react';
import cerebro from '../../icons/cerebro.png'
import usuario from '../../icons/user.png'
import invisible from '../../icons/invisible.png'
import {Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from '../Elements/FormElement';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from '../InputComponent/Input';



// class Login extends React.Component 
// {
 
//     state ={
//         username: "",
//         password: "",
//     }

//     alerta = (e) => {

//         e.preventDefault();
//         this.setState(
//             {
//                 username : document.getElementById("user").value,
//                 password: document.getElementById("pass").value
//             }
//         )
//     }

    
//     render(){
//         return (

        
//         <div>
//           <form > 
//                <center><h2 style={{ color: 'white', fontSize: 30 }}>Test Vocacional <img src={cerebro} id="img"/> </h2> </center>
    
<<<<<<< HEAD
//                 <h3 style={{ color: 'white', fontSize: 25}}>¡Hola Amigo(a)!  {this.state.username +" "+this.state.password }</h3>
//                 <div>
//                 <label  style={{paddingRight:20, color:'blue', fontStyle:'bold', fontSize:20}}>
//                     CURP:
//                     </label>
                
//                     <input type="text" name="user" id="user" /> <img src={usuario} id="img"/>
//                     </div>
//                 <div>
//                     <label style={{paddingRight:20, color:'blue', fontStyle:'bold', fontSize:20}}>
//                     Contraseña:
//                     </label>
               
//                     <input type="text" name="user" id="pass" /> <img src={invisible} id="img"/>
//                     </div>
//                 <div>
//                     <navigator >
//                     <center> <input type="submit" value="Ingresar" onClick={this.alerta} id="sub" style={{backgroundColor:'white', fontSize:20}}/></center>
                    
//                        {/* // <nav input type="submit" value="Ingresar" onClick></nav> */}
//                     </navigator>
=======
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

                    <div><text style={{paddingLeft: 380, color: 'blue'}}>¿Olvidaste tu contraseña?</text></div>
                <div>
                    <navigator >
                    <center> <input type="submit" value="Ingresar" onClick={this.alerta} id="sub" style={{backgroundColor:'white', fontSize:20}}/></center>
                    <div><label>¿No tienes cuenta? Regístrate</label>
                    </div>
                       {/* // <nav input type="submit" value="Ingresar" onClick></nav> */}
                    </navigator>
>>>>>>> dd958b5731d72eb0579eb2bd1a145ac736ea3545
                    
//                 </div>
//             </form>
//         </div> 
        
//         )
//     }
// }


const Login = () => {



const [usuario, cambiarUsuario] = useState({campo: '', valido: null});

const [password, cambiarPassword] = useState({campo: '', valido: null});


// const [terminos, cambiarTerminos] = useState(false);
const [formularioValido, cambiarFormularioValido] = useState(null);

const expresiones = {
    usuario: /^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$/, // Letras, numeros, guion y guion_bajo
  
    password: /^.{4,12}$/, // 4 a 12 digitos.

}

const onSubmit = (e) => 
	{
		e.preventDefault();

		if(
			usuario.valido === 'true' &&
		
			password.valido === 'true' 
			
			//terminos
		){
			cambiarFormularioValido(true);
			cambiarUsuario({campo: '', valido: ''});
			cambiarPassword({campo: '', valido: null});
		;

			// ... 
		}

		else 
		{
			cambiarFormularioValido(false);
		}
	}


    return (  

        <main>
            <center><h2 style={{ color: 'white', fontSize: 30 }}>Test Vocacional <img src={cerebro} id="img"/> </h2> </center>
			<Formulario action="" onSubmit={onSubmit}>
				
                
                <Input
					estado={usuario}
					cambiarEstado={cambiarUsuario}
					tipo="text"
					label="CURP"
					placeholder=" Ejemplo: MAHJ280603MSPRRV09"
					name="usuario"
					leyendaError="Por favor ingrese correctamente, su Clave Única de Registro de Población (CURP)."
					expresionRegular={expresiones.usuario}
				/>
                <br></br>

<Input
					estado={password}
					cambiarEstado={cambiarPassword}
					tipo="password"
					label="Contraseña"
					name="password1"
					leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
					expresionRegular={expresiones.password}
				/>


				{
					formularioValido === false && <MensajeError>
						<p>
							<FontAwesomeIcon icon={faExclamationTriangle}/>
							<b>Error:</b> Por favor rellena el formulario correctamente.
						</p>
					</MensajeError>}

                    <ContenedorBotonCentrado>
					
						<Boton type="submit">Enviar</Boton>
						{formularioValido === true && <MensajeExito>Registro Completado</MensajeExito>
				}



</ContenedorBotonCentrado>

                </Formulario>
        </main>





















    );
}
 
export default Login;











