import React from 'react';
import { BrowserRouter, Route,Switch } from "react-router-dom";
import TempCities from './TempCities';
import AddCities from './AddCities';
import ShowTemp from './ShowTemp';

const AppRouter = () => (
  <BrowserRouter>
    <div>
    
	  <Switch>
      <Route path="/" exact={true} component={TempCities} />
      <Route path="/ShowWeather/:city" component={ShowTemp} />
      <Route path="/addCities" component={AddCities} />
	  </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;