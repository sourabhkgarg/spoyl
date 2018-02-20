
import React from 'react';
import Desktop_nav from './desktop_nav';


class Navbar extends React.Component{

  constructor(props) {
    super(props);
  }

  render () {

    return (
      <div>
        <Desktop_nav />
      </div>
    );
  }

}



export default Navbar;

