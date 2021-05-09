import React, {Component}from 'react'
import '../App.css';
import axios from 'axios';

const url ="https://reqres.in/api/unknown";

export default class verProducto extends Component {

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
            <h3 key={i}>{item.id}</h3>
            <p><b>Producto: </b>{item.producto}</p>
        </div>
    });


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
          <h3>PRODUCTOS:</h3>
          {libros}
        </div>
      </div>
    );
  }
}