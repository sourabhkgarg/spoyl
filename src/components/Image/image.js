import React from 'react';

import './image.scss';


class Image extends React.Component{

  constructor(props) {
    super(props);

  }


  render () {

    const { src , style, link} = this.props;


    return (

        <a href={link} className={"thumbnail "} style={style}>
          <img src={src} alt="" />
        </a>
    );
  }

}



export default Image;


