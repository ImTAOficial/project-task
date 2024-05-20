import React, {Component} from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

class Interface extends Component{
    render(){
        console.log(cookies.get('id'));
        console.log('apellido_paterno: '+cookies.get('apellido_paterno'));
        console.log('apellido_materno'+cookies.get('apellido_materno'));
        console.log('nombre'+cookies.get('nombre'));
        console.log('username'+cookies.get('usarname'));
        return(
            <div>
                Hello 
            </div>
       );
    }
}

export default Interface;