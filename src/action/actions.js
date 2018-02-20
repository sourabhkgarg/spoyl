
import * as Type from './actionConstants';
import api from '../api/api';


export function dispatchAction(type, payload){
  return function(dispatch){
    dispatch({ type: type , payload: payload});
  };
}




export function fetchListOfImages(imageList){

  return function (dispatch) {

    dispatch(dispatchAction(Type.FETCH_IMAGES, {...imageList , loader : true}));
    return api.fetchListOfImages(imageList.pageNo).then(response =>{

      let parsedResult = JSON.parse(response.text);
      let newObj;
      if(parsedResult.length> 0) {
         newObj = {
          ...imageList,
          data: [...imageList.data, ...parsedResult],
          pageNo: imageList.pageNo + 1,
          loader: false
        };
      }else{
        newObj = {
          ...imageList,
          pageNo: -1,
          loader: false
        };
      }

      dispatch(dispatchAction(Type.FETCH_IMAGES, newObj));

    });
  };

}


