import {createStore, applyMiddleware, combineReducers} from "redux";
import thunkMiddleware from "redux-thunk";
import {reducer} from "./reducer/reducer";
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducer = combineReducers({ movies: reducer });

export const store = createStore(rootReducer , composeWithDevTools(applyMiddleware(thunkMiddleware)));
