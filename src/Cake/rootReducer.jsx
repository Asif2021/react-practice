import { combineReducers } from 'redux';
import CakeReducer from '../Cake/CakeReducer';
import toDoReducer from './TodoList/Reducers/ToDoReducer';
import userReducer from '../Cake/User/UserReducers'



    const rootReducer = combineReducers({

         CakeReducer,
         toDoReducer,
         userReducer

    });

    export default rootReducer;