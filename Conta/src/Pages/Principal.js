import React, {Component}from 'react'
import '../App.css';
import axios from 'axios';

const url ="https://reqres.in/api/unknown";

export default class Principal extends Component {

    state={
        data: []
    };
    componentDidMount(){
        this.ObtenerLibros();
    }

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

    ObtenerLibros=async()=>{
        axios.get(url)
        .then(response=>{
            this.setState({
                data: response.data.data
            })
            console.log(this.state.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }


  render() {

    const libros = this.state.data.map((item,i)=>{
        return <div className="Libro">
            <h3>{item.name}</h3>
            <p><b>Autor: </b>{item.id}</p>
            <p><b>Año: </b>{item.year}</p>
        </div>
    });


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
          <h1>WEB CONTABILIDAD</h1>
          <h3>Libros</h3>
          {libros}
        </div>
      </dvi>
    );
  }
}
