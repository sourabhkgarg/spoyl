import {combineReducers} from 'redux';
import Settings from './settings';
import ViewPort from './viewport';
import ImagesList from './imagesReducer';
import SearchImagesList from './searchImages';



const rootReducers = combineReducers({

  ViewPort ,  Settings ,  ImagesList , SearchImagesList

});


export default rootReducers;
