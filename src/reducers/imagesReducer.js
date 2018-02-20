import {FETCH_IMAGES} from "../action/actionConstants";



export default function search( state = {data : [] , pageNo : 1, loader : false}, action) {

  switch (action.type) {

    case FETCH_IMAGES: {

      return action.payload;
    }

    default:
      return state;
  }
}
