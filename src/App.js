import React from 'react';
//redux
import { Provider } from 'react-redux'
import { store } from './store'

//Por ahora dejare el Router y las Routes aqui (son 2 :/)
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Hice modal por la otra ruta :/

//import de components
import Page from './components/Pages/Page';
import Details from './components/Pages/Details';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Page}></Route>
          <Route exact path="/pokemon/:id?" component={Details}></Route>
          <Route exact path="" component={Page}></Route>
        </Switch>
      </Router>
    </Provider>
  );
}
// store.subscribe(() => console.log(store.getState()))
export default App;
