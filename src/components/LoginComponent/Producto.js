import React from 'react';

const Producto = ({producto}) => {



    const {nombre, precio, id} = producto

    //Agregando el producto al carrito


    const seleccionar_producto = (id) => {
        console.log('comprando.....',id);
    }

    return (

            <div> 


                <h2>

                    {nombre}<p>${precio}</p> 
                    <button type ="button"
                    onClick = {() => seleccionar_producto(id)
                    
                    }
                    
                    >
                        Comprar
                    </button>
                </h2>
              
            </div>







    );
}
 
export default Producto;