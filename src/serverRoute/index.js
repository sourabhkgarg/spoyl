export  function renderFullPage(html, preloadedState) {

  return ` <!DOCTYPE html>
  <html lang="en">

    <head>
    <link rel='stylesheet'  href='/static/main.css'  />
   
    </head>
    <body>
    
    
      <div id="app">${html}</div>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>

      <script type="text/javascript" src="/static/vendor.js" ></script>
      <script type="text/javascript" src="/static/main.js" ></script>
    </body>
  </html>
  `
}
