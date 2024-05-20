import React, {Component} from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

class Interface extends Component{


    cerrarSesion=()=>{
        cookies.remove('id', {path: "/"}); 
        cookies.remove('apellido_paterno', {path: "/"}); 
        cookies.remove('apellido_materno', {path: "/"}); 
        cookies.remove('nombre', {path: "/"}); 
        cookies.remove('username', {path: "/"}); 
        window.location.href='./';
    }

    render(){
        console.log('id: '+cookies.get('id'));
        console.log('apellido_paterno: '+cookies.get('apellido_paterno'));
        console.log('apellido_materno'+cookies.get('apellido_materno'));
        console.log('nombre'+cookies.get('nombre'));
        console.log('username'+cookies.get('usarname'));
        return(
            <div>
                Hello 

                <br/>
                <button onClick={()=>this.cerrarSesion()}>Cerrar Sesión</button>
            </div>
       );
    }
}

export default Interface;


/*import React, {Component} from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

class Interface extends Component{
    
    cerrarSesion=()=>{
        cookies.remove('id', {path: "/"}); 
        cookies.remove('apellido_paterno', {path: "/"}); 
        cookies.remove('apellido_materno', {path: "/"}); 
        cookies.remove('nombre', {path: "/"}); 
        cookies.remove('username', {path: "/"}); 
        window.location.href='./';
    }


    render(){
        console.log('id: '+cookies.get('id'));
        console.log('apellido_paterno: '+cookies.get('apellido_paterno'));
        console.log('apellido_materno'+cookies.get('apellido_materno'));
        console.log('nombre'+cookies.get('nombre'));
        console.log('username'+cookies.get('usarname'));
        return(
            <div>
                Hello 

                <br/>
                <button onClick={()=>this.cerrarSesion()}>Cerrar Sesión</button>
            </div>
       );
    }
}

export default Interface;*/


   /* ComponentDidMount(){
    if(!cookies.get('username')){
        window.location.href='./';
    }*/