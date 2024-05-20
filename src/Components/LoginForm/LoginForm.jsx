import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import projectTaskLogo from "./Assets-Logo/projectTaskLogo.png";
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const LoginForm = () => {
  const [form, setForm] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const iniciarSesion = async () => {
    const baseUrl = "http://localhost:3001/usuarios";
    await axios.get(baseUrl, {params: {username: form.username, password: md5(form.password)}})
    .then(response => {
      return response.data;
    })
    .then(response => {
      if(response.length>0){
        var respuesta=response[0];
        cookies.set('id', respuesta.id, {path: '/'});
        cookies.set('apellido_paterno', respuesta.apellido_paterno, {path: '/'});
        cookies.set('apellido_materno', respuesta.apellido_materno, {path: '/'});
        cookies.set('nombre', respuesta.nombre, {path: '/'});
        alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido_paterno}`);
      }else{
        alert('El usuario o la contraseña no son correctos');
      }
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <div className='wrapper'>
      <form action=''>
        <img src={projectTaskLogo} alt="Project " />
        <div className='input-box'>
          <input type="text" name="username" placeholder='Username' onChange={handleChange} required/>
          <FaUser className='icon'/>
        </div>
        <div className='input-box'>
          <input type="password" name="password" placeholder='Password' onChange={handleChange} required/>
          <FaLock className='icon'/>
        </div>
        <div className="remember-forgot">
          <label > <input type="checkbox" />Remember me</label>
          <a href="#">Forgot password?</a>
        </div>
        <button type='button' onClick={iniciarSesion}>Login</button>
        <div className="register-link">
          <p>Don´t have an account? <a href="#">Register</a></p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm;

/*  Code to test if the inputs entered for username and password are being captured without encryption.
import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import projectTaskLogo from "./Assets-Logo/projectTaskLogo.png";

const LoginForm = () => {
  const [form, setForm] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className='wrapper'>
      <form action=''>
        <img src={projectTaskLogo} alt="Project " />
        <div className='input-box'>
          <input type="text" name="username" placeholder='Username' onChange={handleChange} required/>
          <FaUser className='icon'/>
        </div>
        <div className='input-box'>
          <input type="password" name="password" placeholder='Password' onChange={handleChange} required/>
          <FaLock className='icon'/>
        </div>
        <div className="remember-forgot">
          <label > <input type="checkbox" />Remember me</label>
          <a href="#">Forgot password?</a>
        </div>
        <button type='submit'>Login</button>
        <div className="register-link">
          <p>Don´t have an account? <a href="#">Register</a></p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm;

With encription

import React, { useState, useEffect } from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import projectTaskLogo from "./Assets-Logo/projectTaskLogo.png";
import axios from 'axios';
import md5 from 'md5';

const LoginForm = () => {
  const [form, setForm] = useState({
    username: '',
    password: ''
  });

  useEffect(() => {
    console.log(form);
  }, [form]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const iniciarSesion = async () => {
    const baseUrl = "http://localhost:3001/usuarios";
    await axios.get(baseUrl, {params: {username: form.username, password: md5(form.password)}})
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <div className='wrapper'>
      <form action=''>
        <img src={projectTaskLogo} alt="Project " />
        <div className='input-box'>
          <input type="text" name="username" placeholder='Username' onChange={handleChange} required/>
          <FaUser className='icon'/>
        </div>
        <div className='input-box'>
          <input type="password" name="password" placeholder='Password' onChange={handleChange} required/>
          <FaLock className='icon'/>
        </div>
        <div className="remember-forgot">
          <label > <input type="checkbox" />Remember me</label>
          <a href="#">Forgot password?</a>
        </div>
        <button type='button' onClick={iniciarSesion}>Login</button>
        <div className="register-link">
          <p>Don´t have an account? <a href="#">Register</a></p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm;*/