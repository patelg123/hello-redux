import { createStore } from 'redux';
import rootReducer from '../reducers';


const initialState = { tech: "JS" };
export const store = createStore(rootReducer, initialState);
