import React from 'react';
import Main from '../containers/main';
import HomePage from '../containers/Homepage/homepage';


import { Route, IndexRoute } from "react-router";



export default (
  <Route path="/" component={Main}>

    <IndexRoute component={HomePage}/>


  </Route>
);


