import React, {useState} from 'react';
import cerebro from '../../icons/cerebro.png'
import {Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError, Iconopassword} from '../Elements/FormElement';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle,  faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Input from '../InputComponent/Input';
import ShowPasswordElement from '../Elements/ShowPasswordElement';
// import {MultiSelect} from 'multiselect-react-dropdown';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import {MultiSelectes} from '../ComboBoxComponent/MultiSelectes '


//library.add(faEye,faEyeSlash,faExclamationTriangle ); 


const Form = () => {

	// const carrera = [{data}];

	// const data = 	[

    //     { carrera: "Ingeniería Electromecánica", 				id:1            },
    //     { carrera: "Ingeniería en Sistemas Computacionales", 	id:2  			},
    //     { carrera: "Ingeniería en Gestión Empresarial",			id:3        	},
    //     { carrera: "Licenciatura en Administración", 			id:4    		},
    //     { carrera: "Ingeniería Industrial",						id:5            },
    //     { carrera: "Ingeniería Mecatrónica", 					id:6            }
	// ]

    // const [carreras] = useState(data);
	
	const [Password_Input_Type, Toggle_Input_Icon] 		= ShowPasswordElement();
	const [usuario, cambiarUsuario]				 		= useState({campo: '', valido: null});
	const [nombre, cambiarNombre] 						= useState({campo: '', valido: null});
	const [password, cambiarPassword] 					= useState({campo: '', valido: null});
	const [password2, cambiarPassword2] 				= useState({campo: '', valido: null});
	const [correo, cambiarCorreo] 						= useState({campo: '', valido: null});
	const [telefono, cambiarTelefono] 					= useState({campo: '', valido: null});
	const [formularioValido, cambiarFormularioValido]	= useState(null);
	

	const expresiones = 
	{
		usuario: /^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$/, // Letras, numeros, guion y guion_bajo
		nombre: /^[A-Z][a-zA-ZÀ-ÿ\s]{1,40}$/, // Nota: La primera letra es mayúscula, debe tener espacios y puede llevar acentos.
		password: /^.{4,20}$/, // 4 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@((gmail.com)|(hotmail.com)|(outlook.com)|(ite.edu.mx))$/,
		telefono: /^[0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}$/, // 7 a 14 numeros.
		}

	const validarPassword2 = () => 
	{
		if(password.campo.length > 0)
		{

			if(password.campo !== password2.campo)
			{
				cambiarPassword2((prevState) => {
					return {...prevState, valido: 'false'}
				});
			} 

			else     
			{
				cambiarPassword2((prevState) => 
				{
					return {...prevState, valido: 'true'}
				});
			}
		}
	}



	const onSubmit = (e) => 
	{
		e.preventDefault();

		if(
			usuario.valido 		=== 'true' &&
			nombre.valido 		=== 'true' &&
			password.valido 	=== 'true' &&
			password2.valido 	=== 'true' &&
			correo.valido 		=== 'true' &&
			telefono.valido 	=== 'true' 
			
		){
			cambiarFormularioValido		(true);
			cambiarUsuario				({campo: '', valido: ''});
			cambiarNombre				({campo: '', valido: null});
			cambiarPassword				({campo: '', valido: null});
			cambiarPassword2			({campo: '', valido: 'null'});
			cambiarCorreo				({campo: '', valido: null});
			cambiarTelefono				({campo: '', valido: null});
		
		}

		else 
		{
			cambiarFormularioValido(false);
		}
	}

	return (
		<div id="main">
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
				<Input
					estado={nombre}
					cambiarEstado={cambiarNombre}
					tipo="text"
					label="Nombre"
					placeholder="José Manuel Aviles Hernandez o Camila Ramirez"
					name="usuario"
					leyendaError=" Nota: La primera letra debe ser mayúscula."
					expresionRegular={expresiones.nombre}
				/>
				<Input
					estado={correo}
					cambiarEstado={cambiarCorreo}
					tipo="email"
					label="Correo Electrónico"
					placeholder="john@correo.com"
					name="correo"
					leyendaError="Nota: El nombre del domino @gmail.com o algun otro debe ser ingresado correctamenta."
					expresionRegular={expresiones.correo}
				/>
				<Input
					estado={telefono}
					cambiarEstado={cambiarTelefono}
					tipo="text"
					label="Teléfono"
					placeholder="Ejemplo 646 177 79 00"
					name="telefono"
					leyendaError="El télefono debe contener espacios entre dígitos como en el ejemplo."
					expresionRegular={expresiones.telefono}
					
				/>

				
				<Input
					estado={password}
					cambiarEstado={cambiarPassword}
					//tipo="password"
					tipo={Password_Input_Type}
					label="Contraseña"
					name="password1"
					leyendaError="La contraseña tiene que ser de 4 a 20 dígitos."
					expresionRegular={expresiones.password}
				/>
					
					<span className="password-toogle-icon">{Toggle_Input_Icon} </span>
				
				
		
				<Input
					estado={password2}
					cambiarEstado={cambiarPassword2}
					//tipo="password"
					tipo={Password_Input_Type}
					label="Repetir Contraseña"
					name="password2"
					leyendaError="Ambas contraseñas deben ser iguales."
					funcion={validarPassword2}
					
				/>
					
				
		
			
			{/* <MultiSelectes/> */}
				
				
			{/* 	<ComboBox></ComboBox> */}
			
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
		</div>
	);
}
 
export default Form;