import React from 'react';
import {connect} from 'react-redux';

import './homepage.scss';
import {fetchListOfImages} from "../../action/actions";
import Image from '../../components/Image/image';
import {findPaddingBottom} from '../../helperFunction/helper';
import InfiniteScroll from '../../components/InfiniteScroll/infiniteScroll';

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

    let leftBlocks = [];
    let middleBlocks = [];
    let rightBlocks = [];


    if(data.length > 0){

      let type = 0;
      data.forEach(item => {

        if(item.urls && item.urls.thumb){

          let paddBottom = {
            paddingBottom : findPaddingBottom(item.width, item.height, 100)+"%"
          };

          let el =   <div className="block" key={item.id}> <Image src={item.urls.thumb}  style={paddBottom}/>  </div>;

          if(type === 0){
            leftBlocks.push(el);
            type = 1;
          }else if(type === 1){
            middleBlocks.push(el);
            type = 2;
          }else if(type === 2){
            rightBlocks.push(el);
            type = 0;
          }
        }
      });


    }





    return (
      <div className="container">

        {pageNo === 1 && loader ?
        <div className="full_window_loader">
          <img src="https://www.spoyl.in/app/images/spoyl-logo.png" alt=""/>
        </div> :

        <div className="max-1200 pad_top ">
          <h3 className="head_h3">Popular Images</h3>
          <InfiniteScroll offset={100} scrollhandler={this.fetchImages}>
          <div className="img_container">
            <div className="image_inner_container">
              {leftBlocks}
            </div>
            <div className="image_inner_container">
              {middleBlocks}
            </div>
            <div className="image_inner_container">
              {rightBlocks}
            </div>
          </div>
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
