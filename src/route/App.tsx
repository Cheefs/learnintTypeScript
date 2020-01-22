import React from 'react';
import { Home } from '../pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { Dispatch } from 'redux';
// import { IAction } from './interfaces';

// const testAction = (): IAction => ({ type: 'TEST'})

type AppProps = {} 

// const App: React.FC<AppProps> = (props) => {
//   const { test } = props;
//   return (
//     <div className="App" onClick={ test }>
//         click
//     </div>
//   );
// }

// const mStp = () => ({});

// const mdp = (dispatch: Dispatch ) =>({
//     test: () => dispatch( testAction() )
// });

// export default connect(mStp, mdp)(App);

export default function App( props: AppProps ) {
    return (
        <BrowserRouter>
            <Route path='/' exac>
                <Home/>
            </Route>
        </BrowserRouter>
    )
}
