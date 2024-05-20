import React, {Component} from "react";
import Cookies from "universal-cookie";
import './Interface.css';
import '../Assets/background.jpg';
import projectTaskLogo from "./Assets-Interface/projectTaskLogo.png";

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
                <nav>
                    <div>
                        <img src={projectTaskLogo} alt="projectTaskLogo"/>
                        <span>Project Task</span>
                    </div>
                    <button onClick={this.cerrarSesion}>Cerrar sesion</button>
                </nav>
                <div className="project-form">
                    <h1>Agregar Nuevo Proyecto</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="projectName">Nombre</label>
                            <input type="text" id="projectName" placeholder="Ingresa el nombre del proyecto" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="projectDescription">Descripción</label>
                            <textarea id="projectDescription" placeholder="Ingresa la descripción del proyecto"></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="projectDocuments">Documentos</label>
                            <input type="file" id="projectDocuments" multiple />
                        </div>
                        <div className="form-group">
                            <label htmlFor="projectPriority">Prioridad</label>
                            <select id="projectPriority">
                                <option value="low">Baja</option>
                                <option value="medium">Media</option>
                                <option value="high">Alta</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="projectCost">Costo</label>
                            <input type="number" id="projectCost" placeholder="Ingresa el costo del proyecto" />
                        </div>
                        <button type="submit">Agregar Proyecto</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Interface;



/*backup*/
/*
import React, {Component} from "react";
import Cookies from "universal-cookie";
import { Button } from "@nextui-org/react";
import 'tailwindcss/tailwind.css';

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
                <p className="text-3xl">Hello</p>
                <br/>
                <Button auto onClick={()=>this.cerrarSesion()}>Cerrar Sesión</Button>
            </div>
       );
    }
}

export default Interface;*/


/*Back up
import React, {Component} from "react";
import Cookies from "universal-cookie";
import './Interface.css';

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
*/