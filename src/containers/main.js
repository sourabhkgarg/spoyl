import React from 'react';
import {connect} from 'react-redux';
import Navbar from '../components/Navbar/navbar';


class Main extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

     return (
      <div className="container">

        <Navbar/>

        <div className="min_height">
          {this.props.children}

        </div>

      </div>
    );
  }

}



export default connect()(Main);
