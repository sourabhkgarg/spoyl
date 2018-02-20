

require('ignore-styles');

import api from '../api/api';

let Express  = require('express');
let React = require ('react');
import {createStore} from 'redux';

const renderToString = require('react-dom/server').renderToString;
const RouterContext = require('react-router').RouterContext;
const match = require('react-router').match;
const Provider = require('react-redux').Provider;
const routes = require('../routes/route');
import reducer from '../reducers/rootReducers';
import {renderFullPage} from './index';
let device = require('express-device');





let router = Express.Router();
router.use(device.capture());


router.get('/', (req, res) => {

  getmatchRoute(req.url, res, function(renderProps) {

      api.fetchListOfImages('&page=1').then(response => {

        let parsedResult = JSON.parse(response.text);
        let newObj = {data: parsedResult, pageNo: 2, loader: false };
        if(parsedResult.length < 1) {
            newObj = {
              data: parsedResult,
              pageNo: -1,
              loader: false
            }}

        let reduxState = {ImagesList : newObj};
        createHtmlWithStore(renderProps , res, req.device.type, reduxState );

      }).catch(e => {
        let newObj = {data: [], pageNo: -1, loader: false };
        let reduxState = {ImagesList : newObj};
        createHtmlWithStore(renderProps , res, req.device.type, reduxState );
      });


    }
  );
});



router.get('/search', (req, res) => {

  getmatchRoute(req.url, res , function(renderProps) {

    let queryString = req.query.search;

    api.searchImages('&page=1&query='+queryString).then(response => {
      let parsedResult = JSON.parse(response.text);
      let newObj = {data: parsedResult.results, pageNo: 2, loader: false };
      if(parsedResult.results.length < 1) {
        newObj = {
          data: parsedResult,
          pageNo: -1,
          loader: false
        }}

        let reduxState = {SearchImagesList : newObj};

      createHtmlWithStore(renderProps , res, req.device.type, reduxState );

    }).catch(e => {
      let newObj = {data: [], pageNo: -1, loader: false };
      let reduxState = {SearchImagesList : newObj};
      createHtmlWithStore(renderProps , res, req.device.type, reduxState );
    });
  });

});




module.exports = router;








export  function createHtmlWithStore(renderProps , res, devicetype , response){


  const store = createStore(reducer, response);
  let html;
  if (renderProps) {

    html = renderToString( <Provider store={store}>
      <RouterContext {...renderProps} />
    </Provider>);

  }

  const preloadedState = store.getState();
  res.send(renderFullPage(html, preloadedState));


}








export  function getmatchRoute(url, res , callBack){
  match(
    { routes, location: url },
    (err, redirectLocation, renderProps) => {

      if (err) {
        return res.status(500).send(err.message);
      }
      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }
      callBack(renderProps);

    });
}

