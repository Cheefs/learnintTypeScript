import { combineReducers } from 'redux';
import { IAppState } from '../interfaces/IAppState';
import main, { mainInitialState } from '../reducers/main';

export const rootInitialState: IAppState = { 
    main: mainInitialState 
};

export default combineReducers({ 
    main 
});