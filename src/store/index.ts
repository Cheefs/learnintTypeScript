import { createStore, applyMiddleware, compose, Store } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer, { rootInitialState } from '../reducers';

export type AppState = ReturnType<typeof rootReducer>;

const doCompose = compose( applyMiddleware( createLogger() ) ); 

export default function configureStore(): Store {
    return { ...createStore( 
        rootReducer, 
        rootInitialState, 
        doCompose 
    )}
}