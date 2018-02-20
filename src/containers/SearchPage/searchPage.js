import React from 'react';
import {connect} from 'react-redux';

import {searchImages} from "../../action/actions";
import {getQueryStringValue} from '../../action/cookies';
import InfiniteScroll from '../../components/InfiniteScroll/infiniteScroll';
import ImageListContainer from '../../components/ImageListContainer/imageListContainer';


class Main extends React.Component{

  constructor(props) {
    super(props);
    this.state={ searchQuery : ""};
    this.fetchImages = this.fetchImages.bind(this);
  }

  componentDidMount(){
    this.fetchImages();
    this.setState({searchQuery : getQueryStringValue('search') });
  }

  componentWillReceiveProps(){
    let queryString = getQueryStringValue('search');
    if(this.state.searchQuery !== queryString) {
      this.fetchImages();
    }

  }

  fetchImages(){
    let queryString = getQueryStringValue('search');
    const {dispatch, SearchImagesList} = this.props;
    let searchLocalObj = {...SearchImagesList};

    if(this.state.searchQuery !== queryString){
      searchLocalObj.data = [];
      searchLocalObj.pageNo = 1;
      this.setState({searchQuery : queryString });
    }

    if(searchLocalObj.pageNo !== -1 && !searchLocalObj.loader){
      dispatch(searchImages(searchLocalObj, queryString));
    }
  }


  render () {

    const {SearchImagesList} = this.props;
    const {data, loader , pageNo} = SearchImagesList;

    return (
      <div className="container">

        {pageNo === 1 && loader ?
          <div className="full_window_loader">
            <img src="https://www.spoyl.in/app/images/spoyl-logo.png" alt=""/>
          </div> :

          <div className="max-1200 pad_top ">
            <h3 className="head_h3">Found Images</h3>
            <InfiniteScroll offset={100} scrollhandler={this.fetchImages}>
              <ImageListContainer ImagesList={SearchImagesList}/>
            </InfiniteScroll>
          </div> }

      </div>

    );
  }

}


function mapStateToProps(state) {
  return {
    SearchImagesList : state.SearchImagesList

  };
}

export default connect(mapStateToProps)(Main);
