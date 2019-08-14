import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import StreamList from '../pages/streams/StreamList'
import StreamCreate from '../pages/streams/StreamCreate'
import StreamEdit from '../pages/streams/StreamEdit'
import StreamShow from '../pages/streams/StreamShow'
import StreamDelete from '../pages/streams/StreamDelete'
import NotFound from '../pages/404'
import Header from '../layouts/Header'

function App() {
  return (
    <div className='ui container'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={StreamList} />
          <Route exact path='/streams/new' component={StreamCreate} />
          <Route exact path='/streams/edit' component={StreamEdit} />
          <Route exact path='/streams/show' component={StreamShow} />
          <Route exact path='/streams/delete' component={StreamDelete} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
