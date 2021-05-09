import React, {Component}from 'react'
import './App.css';
import axios from 'axios';

const url ="direccion ip";

export default class App extends Component {

  state={
    form:{
      titulo: '',
      autor: '',
      fecha_Publicacion: ''
    },
    form2:{
      vendedor: '',
      fecha: '',
      articulo: ''
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

  handleChange2=async e=>{
    e.persist();
    await this.setState({
        form2:{
            ...this.state.form2,
            [e.target.name]: e.target.value
        }
    });
    console.log(this.state.form2);
  }

  GuardarLibro=async()=>{
    axios.post(url, {titulo: this.state.form.titulo, autor: this.state.form.autor, fecha_Publicacion: this.state.form.año})
    .then(response=>{
        console.log(response.data);
    })
    .catch(error=>{
        console.log("error")
    })
  }

  GuardarVenta=async()=>{
    axios.post(url, {titulo: this.state.form2.titulo, autor: this.state.form2.autor, fecha_Publicacion: this.state.form2.año})
    .then(response=>{
        console.log(response.data);
    })
    .catch(error=>{
        console.log("error")
    })
  }


  render() {

    return(
      <div>
        <div className="App2">
          <h1>PROYECTO - Redes 1</h1>
          <h2>Grupo #36</h2>
          <h4>Integrantes: </h4>
          <p> 201602469 Oscar Eduardo Mazariegos López <br/>
              201602503 Pablo Rodrigo Barillas Calderón <br/>
              201602676 Josselyn Vanessa Polanco Gameros <br/>
              201612413 Jennifer Marisol López Orozco <br/>
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
            <input type="text" name="fecha_Publicacion" id="fecha_Publicacion" onChange={this.handleChange}/><br/><br/>
            <button type="submit" onClick={this.GuardarLibro}>Agregar Libro</button>
          </form>
          <h1>____________________________________________</h1>
          <h3>NUEVA VENTA</h3>
          <form>
            <label for="fvendedor">Vendendor: </label>
            <input type="text" name="vendedor" id="vendedor" onChange={this.handleChange2}/><br/><br/>
            <label for="lfecha">Fecha: </label>
            <input type="text" name="fecha" id="fecha" onChange={this.handleChange2}/><br/><br/>
            <label for="lautor">Articulo: </label>
            <input type="text" name="articulo" id="articulo" onChange={this.handleChange2}/><br/><br/>
            <button type="submit" onClick={this.GuardarLibro}>Vender</button>
          </form>
        </div>
      </div>
    );
  }
}
