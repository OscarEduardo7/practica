import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from '../App';
import Principal from '../Pages/Principal';


//rutas creadas LOGIN
//ruta de prueba app
function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/libros" component={Principal}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;