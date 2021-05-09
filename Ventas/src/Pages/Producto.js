import React, {Component}from 'react'
import axios from 'axios';

const url ="direccion ip";

export default class Producto extends Component {

  state={
    form:{
      id: '',
      producto: '',
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
    axios.post(url, {id: this.state.form.id, producto: this.state.form.producto })
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
          <h1>VENTAS</h1>
          <h3>Agregar Producto</h3>
          <form>
            <label>Id: </label>
            <input type="text" name="id" onChange={this.handleChange}/><br/><br/>
            <label >Producto: </label>
            <input type="text" name="producto" onChange={this.handleChange}/><br/><br/>
            
            <button type="submit" onClick={this.GuardarVendedor}>Agregar Producto</button>
          </form>
        </div>
      </div>
    );
  }
}