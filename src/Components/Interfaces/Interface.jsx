import React, {Component} from "react";
import Cookies from "universal-cookie";
import './Interface.css';
import '../Assets/background.jpg';
import projectTaskLogo from "./Assets-Interface/projectTaskLogo.png";

const cookies = new Cookies();

class Interface extends Component{
    state = {
        projects: [],
        projectName: "",
        projectDescription: "",
        projectDocuments: null,
        projectPriority: "low",
        projectCost: 0
    }

    cerrarSesion=()=>{
        cookies.remove('id', {path: "/"}); 
        cookies.remove('apellido_paterno', {path: "/"}); 
        cookies.remove('apellido_materno', {path: "/"}); 
        cookies.remove('nombre', {path: "/"}); 
        cookies.remove('username', {path: "/"}); 
        window.location.href='./';
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleFileChange = (event) => {
        this.setState({ projectDocuments: event.target.files });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            projects: [...prevState.projects, {
                name: this.state.projectName,
                description: this.state.projectDescription,
                documents: this.state.projectDocuments,
                priority: this.state.projectPriority,
                cost: this.state.projectCost,
                status: 'Pendiente'
            }],
            projectName: "",
            projectDescription: "",
            projectDocuments: null,
            projectPriority: "low",
            projectCost: 0
        }));
    }

    handleAccept = (index) => {
        console.log(`Proyecto ${index} aceptado`);
        this.setState(prevState => {
            const projects = [...prevState.projects];
            projects[index].status = 'Proyecto Aceptado';
            return { projects };
        });
    }

    handleReject = (index) => {
        console.log(`Proyecto ${index} rechazado`);
        this.setState(prevState => {
            const projects = [...prevState.projects];
            projects[index].status = 'Proyecto rechazado';
            return { projects };
        });
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
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="projectName">Nombre</label>
                            <input type="text" id="projectName" value={this.state.projectName} onChange={this.handleChange} placeholder="Ingresa el nombre del proyecto" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="projectDescription">Descripción</label>
                            <textarea id="projectDescription" value={this.state.projectDescription} onChange={this.handleChange} placeholder="Ingresa la descripción del proyecto"></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="projectDocuments">Documentos</label>
                            <input type="file" id="projectDocuments" multiple onChange={this.handleFileChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="projectPriority">Prioridad</label>
                            <select id="projectPriority" value={this.state.projectPriority} onChange={this.handleChange}>
                                <option value="low">Baja</option>
                                <option value="medium">Media</option>
                                <option value="high">Alta</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="projectCost">Costo</label>
                            <input type="number" id="projectCost" value={this.state.projectCost} onChange={this.handleChange} placeholder="Ingresa el costo del proyecto" />
                        </div>
                        <button type="submit">Agregar Proyecto</button>
                    </form>
                </div>
                <div className="Project-list">
                <h1>Lista de proyectos</h1>
                <br/>
                    {this.state.projects.map((project, index) => (
                        <div key={index}>
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                            <p>Prioridad: {project.priority}</p>
                            <p>Costo: {project.cost}</p>
                            {project.status === 'Pendiente' ? (
                                <>
                                    <button onClick={() => this.handleAccept(index)}>Aceptar</button>
                                    <button onClick={() => this.handleReject(index)}>Rechazar</button>
                                </>
                            ) : (
                                <p>Estado: {project.status}</p>
                            )}
                        </div>
                    ))}
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