import React from 'react';
import './navbar.scss';
import {Link} from 'react-router';


class Navbar extends React.Component{

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }


  render () {

    return (
      <div className="container nav_abs">
        <div className="container navbar ">

          <div className="flex flex_center max-1200">

            <Link  to="/" className="logo_width">
              <img src="https://www.spoyl.in/app/images/spoyl-logo.png" alt=""/>
            </Link>

            <div className="navLinks">

              <input type="text" placeholder="Search Images"/>

            </div>

          </div>


        </div>

      </div>


    );
  }

}



export default Navbar;


