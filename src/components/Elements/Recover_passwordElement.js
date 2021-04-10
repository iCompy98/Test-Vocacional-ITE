import styled, {css} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const colores = {
	borde: "#0075FF",
	error: "#bb2929",
	exito: "#1ed12d"
}

const Recover_Form = styled.form`
	
	display: grid;
	grid-template-columns: 1fr;
	gap: 100px;

	@media (max-width: 1000px){
		grid-template-columns: 1fr;
	}
`;


const IconoValidacion = styled(FontAwesomeIcon)`
	position: absolute;
	right: 10px;
	bottom: 14px;
	z-index: 100;
	font-size: 16px;
	opacity: 0;

	${props => props.valido === 'false' && css`
		opacity: 1;
		color: ${colores.error};
	`}

	${props => props.valido === 'true' && css`
		opacity: 1;
		color: ${colores.exito};
	`}
`;

export {
    Recover_Form, 
    IconoValidacion
        };