import {combineReducers} from 'redux';
import Settings from './settings';
import ViewPort from './viewport';
import ImagesList from './imagesReducer';




const rootReducers = combineReducers({

  ViewPort ,  Settings ,  ImagesList

});


export default rootReducers;
