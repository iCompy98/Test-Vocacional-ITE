import React, {useState} from 'react';
 
import {MultiSelect} from 'multiselect-react-dropdown';

const MultiSelectes = () => {

    const data =[

        { carrera: "Ingeniería Electromecánica", id:1           },
        { carrera: "Ingeniería en Sistemas Computacionales", id:2  },
        { carrera: "Ingeniería en Gestión Empresarial", id:3        },
        { carrera: "Licenciatura en Administración", id:4    },
        { carrera: "Ingeniería Industrial",id:5                  },
        { carrera: "Ingeniería Mecatrónica", id:6               }
    ]

    const [options] = useState(data);
    return (  
                <div style={{whidth:"90%",justifyContent:"center",display:"flex"}}>
                        <MultiSelect options={options} displayValue = "carrera" />
            </div>
    );

}
 
export default MultiSelectes;