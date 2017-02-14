import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Cost from './Cost';
import Home from './Home';
import Facilities from './Facilities';
import Routine from './Routine';
import Rspct from './Rspct';
import Studycamps from './Studycamps';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.css';

import { Router, Route, hashHistory, IndexRoute} from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/cost" component={Cost}/>
      <Route path="/facilities" component={Facilities}/>
      <Route path="/routine" component={Routine}/>
      <Route path="/rspct" component={Rspct}/>
      <Route path="/studycamps" component={Studycamps}/>
    </Route>  
  </Router>,
  document.getElementById('root')
);


