import React from 'react';
import {connect} from 'react-redux';

import './homepage.scss';
import {fetchListOfImages} from "../../action/actions";
import InfiniteScroll from '../../components/InfiniteScroll/infiniteScroll';
import ImageListContainer from '../../components/ImageListContainer/imageListContainer';


class Main extends React.Component{

  constructor(props) {
    super(props);
    this.fetchImages = this.fetchImages.bind(this);
  }

  componentDidMount(){
    this.fetchImages();
  }

  fetchImages(){
    const {dispatch, ImagesList} = this.props;
    if(ImagesList.pageNo !== -1 && !ImagesList.loader){
      dispatch(fetchListOfImages(ImagesList));
    }
  }


  render () {

    const {ImagesList} = this.props;
    const {data, loader , pageNo} = ImagesList;

    return (
      <div className="container">

        {pageNo === 1 && loader ?
        <div className="full_window_loader">
          <img src="https://www.spoyl.in/app/images/spoyl-logo.png" alt=""/>
        </div> :

        <div className="max-1200 pad_top ">
          <h3 className="head_h3">Popular Images</h3>
          <InfiniteScroll offset={100} scrollhandler={this.fetchImages}>
           <ImageListContainer ImagesList={ImagesList}/>
          </InfiniteScroll>
          </div> }

        </div>

    );
  }

}


function mapStateToProps(state) {
  return {
    ImagesList : state.ImagesList

  };
}

export default connect(mapStateToProps)(Main);
