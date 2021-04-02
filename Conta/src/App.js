import React, {Component}from 'react'
import './App.css';
import axios from 'axios';

const url ="direccion ip";

export default class App extends Component {

  state={
    form:{
      titulo: '',
      autor: '',
      año: ''
    }
  };

  handleChange=async e=>{
    e.persist();
    await this.setState({
        form:{
            ...this.state.form,
            [e.target.name]: e.target.value
        }
    });
    console.log(this.state.form);
  }

  GuardarLibro=async()=>{
    axios.post(url, {titulo: this.state.titulo, autor: this.state.autor, año: this.state.año})
    .then(response=>{
        console.log(response.data);
    })
    .catch(error=>{
        console.log("error")
    })
  }


  render() {

    return(
      <dvi>
        <div className="App2">
          <h1>Practica 2 - Redes 1</h1>
          <h2>Grupo #36</h2>
          <h4>Integrantes: </h4>
          <p> 201602469 Oscar Eduardo Mazariegos López <br/>
              201602469 Oscar Eduardo Mazariegos López <br/>
              201602469 Oscar Eduardo Mazariegos López <br/>
              201602469 Oscar Eduardo Mazariegos López <br/>
          </p>
        </div>
        <div className="App">
          <h1>CONTABILIDAD</h1>
          <h3>Agregar Libro</h3>
          <form>
            <label for="ftitulo">Titulo: </label>
            <input type="text" name="titulo" id="titulo" onChange={this.handleChange}/><br/><br/>
            <label for="lautor">Autor: </label>
            <input type="text" name="autor" id="autor" onChange={this.handleChange}/><br/><br/>
            <label for="lautor">_Año: </label>
            <input type="text" name="año" id="año" onChange={this.handleChange}/><br/><br/>
            <button type="submit" onClick={this.GuardarLibro}>Agregar Libro</button>
          </form>
        </div>
      </dvi>
    );
  }
}
