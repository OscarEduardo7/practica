import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from '../App';
import Principal from '../Pages/Principal';
import Vendedor from '../Pages/Vendedor';
import Producto from '../Pages/Producto';
import verProducto from '../Pages/verProducto';


//rutas creadas LOGIN
//ruta de prueba app
function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/VerLibros" component={Principal}/>
                <Route exact path="/Vendedor" component={Vendedor}/>
                <Route exact path="/agregarP" component={Producto}/>
                <Route exact path="/verP" component={verProducto}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;