import React, {useState} from 'react';
import cerebro from '../../icons/cerebro.png'
import usuario from '../../icons/user.png'
import invisible from '../../icons/invisible.png'
import {Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError, Iconopassword} from '../Elements/FormElement';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Input from '../InputComponent/Input';
import ShowPasswordElement from '../Elements/ShowPasswordElement';

import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faEye,faEyeSlash ); 

const Login = () => {


const [Password_Input_Type, Toggle_Input_Icon] = ShowPasswordElement();
const [usuario, cambiarUsuario] = useState({campo: '', valido: null});

const [password, cambiarPassword] = useState({campo: '', valido: null});


// const [terminos, cambiarTerminos] = useState(false);
const [formularioValido, cambiarFormularioValido] = useState(null);

const expresiones = {
    usuario: /^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$/, // Letras, numeros, guion y guion_bajo
  
    password: /^.{4,20}$/, // 4 a 20 digitos.

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
		<center>
			<Formulario action="" onSubmit={onSubmit}>
				
               
                <Input type='color' value='#1155cc'
					estado={usuario}
					cambiarEstado={cambiarUsuario}
					tipo="text"
				    label="CURP:"
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
					label="Contraseña:"
					name="password1"
					leyendaError="La contraseña tiene que ser de 4 a 20 dígitos."
					expresionRegular={expresiones.password}
					tipo={Password_Input_Type}
				>



				<span className="password-toogle-icon">{Toggle_Input_Icon} </span>
			</Input>


				{
					formularioValido === false && <MensajeError>
						<p>
							<FontAwesomeIcon icon={faExclamationTriangle}/>
							<b>Error:</b> Por favor rellena el formulario correctamente.
						</p>
					</MensajeError>}

                    <ContenedorBotonCentrado>
					
						<Boton type="submit">Ingresar</Boton>


						<br>
						</br>

						<h5>¿No tienes cuenta? Registrate -- 	Aquí </h5> 	
						{formularioValido === true && <MensajeExito>Registro Completado</MensajeExito>


						
				}


</ContenedorBotonCentrado>

                </Formulario>

				</center>
        </main>


    );
}
 
export default Login;











