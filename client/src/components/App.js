import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';


const App = () => {
  return (
    <div>
        <Router history={history}>
        <div className='ui container'>
            <Header />
            <Switch>
              <Route path = '/' component={StreamList} exact/>
              <Route path = '/streams/new' component={StreamCreate} exact/>
              <Route path = '/streams/:id' component={StreamShow} exact/>
              <Route path = '/streams/edit/:id' component={StreamEdit} exact/>
              <Route path = '/streams/delete/:id' component={StreamDelete} exact/>
            </Switch>
        </div>
        </Router>
    </div>
  )
}

export default App;

// 412933126656-7s2j0uvtjlquvr40a00rrjvipcgddndt.apps.googleusercontent.com