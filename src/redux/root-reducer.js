import { combineReducers } from 'redux';
import formFieldReducer from './form-field/formField.reducer'
const rootReducer = combineReducers({
    formField:formFieldReducer
});

export default rootReducer
