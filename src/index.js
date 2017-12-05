import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import NoMatch from './NoMatch';
import Fourpointone from './Fourpointone';
import { BrowserRouter, Route, Link } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path='/' component={App}></Route>
      <Route path="/One" component={One}></Route>
      <Route path="/Two" component={Two}></Route>
      <Route path="/Three" component={Three}></Route>
      <Route path="/Four" component={Four}>
        <Route path="/Four/:id" component={Fourpointone} />
      </Route>
      <Route path="*" component={NoMatch}></Route>
    </div>

  </BrowserRouter>




,
  document.getElementById('root')
);
