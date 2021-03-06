import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from '../history'
import StreamList from '../pages/streams/StreamList'
import StreamCreate from '../pages/streams/StreamCreate'
import StreamEdit from '../pages/streams/StreamEdit'
import StreamShow from '../pages/streams/StreamShow'
import NotFound from '../pages/404'
import Header from '../layouts/Header'

function App() {
  return (
    <div className='ui container'>
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path='/' component={StreamList} />
          <Route exact path='/streams/new' component={StreamCreate} />
          <Route exact path='/streams/edit/:id' component={StreamEdit} />
          <Route exact path='/streams/:id' component={StreamShow} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
