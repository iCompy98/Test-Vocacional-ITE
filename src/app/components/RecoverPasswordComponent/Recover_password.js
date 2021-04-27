import React, {useState} from 'react'

import {ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from '../Elements/FormElement';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from '../InputComponent/Input';
import {Recover_Form} from '../Elements/Recover_passwordElement';
import './Recover.css';
const Recover_password = () => 
{
    const [correo, cambiarCorreo] 						= useState({campo: '', valido: null});
    const [formularioValido, cambiarFormularioValido]	= useState(null);

	const expresiones = 
	{
		
		correo: /^[a-zA-Z0-9_.+-]+@((gmail.com)|(hotmail.com)|(outlook.com)|(ite.edu.mx))$/,

		}

        const onSubmit = (e) => 
        {
            e.preventDefault();
    
            if(
              
                correo.valido 		=== 'true' 
                
            ){
                cambiarFormularioValido		(true);
               
                cambiarCorreo				({campo: '', valido: null});
              
            }
    
            else 
            {
                cambiarFormularioValido(false);
            }
        }
    
   
    return (    




        <Recover_Form  action="" onSubmit={onSubmit}>
		

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
                {
					formularioValido === false && <MensajeError>
						<p>
							<FontAwesomeIcon icon={faExclamationTriangle}/>
							<b>Error: Correo no registrado </b> .
						</p>
					</MensajeError>}
                        
					<ContenedorBotonCentrado>
                        
						
						<Boton type="submit">Enviar</Boton>
						{formularioValido === true && <MensajeExito>Su contraseña fue enviada a su correo</MensajeExito>
					
				}		
				</ContenedorBotonCentrado>
			

				<Boton type="submit_cancelar" id="cancelar" > Cancelar</Boton>
            </Recover_Form>

     );
}
 
export default Recover_password;