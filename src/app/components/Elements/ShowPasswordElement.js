import React,{useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 

const ShowPasswordElement = () => {

    const [visible, setVisibility] = useState(false);


    const Icon = (

    <FontAwesomeIcon icon={visible ? "eye" : "eye-slash"}
    onClick={ () => setVisibility(visibility => !visibility)} />
    )

    const Input_type = visible ? "text" : "password";
    return [

        Input_type, Icon



    ]
}

export default ShowPasswordElement
