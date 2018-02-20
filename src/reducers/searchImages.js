import {SEARCH_IMAGES} from "../action/actionConstants";



export default function search( state = {data : [] , pageNo : 1, loader : false, message : ""}, action) {

  switch (action.type) {

    case SEARCH_IMAGES: {

      return action.payload;
    }

    default:
      return state;
  }
}
