import React from 'react';
import {connect} from 'react-redux';



class Questions extends React.Component{

  constructor(props) {
    super(props);
    this.state = {  animate: true, result : false, width: 500};

  }


  render () {


    return (
      <div className="container">


      </div>
    );
  }

}



function mapStateToProps(state) {
  return {
    questions :  state.Questions
  };
}

export default connect(mapStateToProps)(Questions);


