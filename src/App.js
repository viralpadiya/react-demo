import React,{Fragment} from 'react'
import Home from './Containers/HomeContainer'
import Header from './Containers/controllers/HeaderContainer'

import {createStore} from 'redux';
import {Provider} from 'react-redux'
import rootReducer from './Services/Reducers/index';
const store =createStore(rootReducer);

export default function App(props) {
  return (
    <Provider store={store}>
    <Header />
    <div className="container">
      <div className="col-md-12 text-center mt-2">
          <Home />
      </div>
    </div>
    </Provider>
  );
}
