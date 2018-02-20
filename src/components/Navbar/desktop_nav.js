import React from 'react';
import './navbar.scss';
import {Link, browserHistory} from 'react-router';


class Navbar extends React.Component{

  constructor(props) {
    super(props);
    this.state = {search : ""};
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e){
    let val = e.target.value;
    this.setState({search : val});
  }
  onClick(){
    const {search} = this.state;
    browserHistory.push('/search?search='+search);

  }


  render () {

    const {search} = this.state;

    return (

      <div className="container nav_abs">
        <div className="container navbar ">

          <div className="flex flex_center max-1200">

            <Link to="/" className="logo_width">
              <img src="https://www.spoyl.in/app/images/spoyl-logo.png" alt=""/>
            </Link>

            <div className="navLinks">

              <input type="text" placeholder="Search Images" value={search} onChange={this.onChange}/>
              <button onClick={this.onClick}>Search</button>

            </div>

          </div>

        </div>
      </div>


    );
  }

}



export default Navbar;


