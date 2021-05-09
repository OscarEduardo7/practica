import React, {Component}from 'react'
import axios from 'axios';

const url ="direccion ip";

export default class Vendedor extends Component {

  state={
    form:{
      dpi: '',
      nombre: '',
      apellido: '',
      direccion: '',
      telefono: '',
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

  GuardarVendedor=async()=>{
    axios.post(url, {dpi: this.state.form.dpi, nombre: this.state.form.nombre, apellido: this.state.form.apellido, direccion: this.state.form.direccion, telefono: this.state.form.telefono })
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
          <h1>RECURSOS HUMANOS</h1>
          <h3>Agregar Vendedor</h3>
          <form>
            <label>Dpi: </label>
            <input type="text" name="dpi" onChange={this.handleChange}/><br/><br/>
            <label >Nombre: </label>
            <input type="text" name="nombre" onChange={this.handleChange}/><br/><br/>
            <label >Apellido: </label>
            <input type="text" name="apellido"  onChange={this.handleChange}/><br/><br/>
            <label >Direccion: </label>
            <input type="text" name="direccion"  onChange={this.handleChange}/><br/><br/>
            <label >Telefono: </label>
            <input type="text" name="telefono"  onChange={this.handleChange}/><br/><br/>
                  
            
            <button type="submit" onClick={this.GuardarVendedor}>Agregar Vendedor</button>
          </form>
        </div>
      </div>
    );
  }
}