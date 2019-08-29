import { combineReducers } from 'redux';
import formFieldReducer from './form-field/form-field.reducer'
const rootReducer = combineReducers({
    formField:formFieldReducer
});

export default rootReducer
