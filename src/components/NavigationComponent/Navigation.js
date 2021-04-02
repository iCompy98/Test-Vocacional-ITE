import React from 'react';
import {Link} from "react-router";

export const Left = (props) =>{
    return(

        <nav className = " Prueba_navegacion_por_default"> 

            <div className = "container">
                
                        <div   className = "Prueba_navegacion" >

                            <ul className = "Navegar">

                                <li><Link to ={"/home"}>App</Link> </li>


                             </ul>
                        </div>

        
            </div>
                       
        
        
        
        </nav>
    )
}