import React,{Component} from 'react';


class Question_Radio extends Component{


    //Valor predeterminado de radio button es nulo, para que aparezca en blanco
    state =
    {

        value : ""


    };

    //Si se llegase a presionar el radio button se genera un cambio en su valor

    onChange = e => {

        this.setState({value : e.target.value});
    }



    render(){
          
        const {value} =this.state;


        return(

            <div id ="preguntas">
          
            <form>
            
                    <h1>¿Eres bueno cocinando?  {value}</h1>
                    <label>
                        Muy Habil
                        <input
                        type ="radio"
                        value = "Muy Habil"
                        checked ={value === "Muy Habil"}
    
                        onChange = {this.onChange}
                        />
                    </label>

                    <label>
                        Medianamente Habil
                        <input
                        type ="radio"
                        value = "Medianamente Habil"
                        checked ={value === "Medianamente Habil"}
    
                        onChange = {this.onChange}
                        />
                    </label>


                    <label>
                        Nada Habil
                        <input
                        type ="radio"
                        value = "Nada Habil"
                        checked ={value === "Nada Habil"}
    
                        onChange = {this.onChange}
                        />
                    </label>
            </form>
            </div>
        )
    }

}

export default Question_Radio;

  