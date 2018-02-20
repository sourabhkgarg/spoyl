import React from 'react';
import Main from '../containers/main';
import HomePage from '../containers/Homepage/homepage';
import SearchPage from '../containers/SearchPage/searchPage';


import { Route, IndexRoute } from "react-router";




export default (
  <Route path="/" component={Main}>

    <IndexRoute component={HomePage}/>
    <Route  path="/search" component={SearchPage}/>


  </Route>
);


