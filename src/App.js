import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/pages/landing'
import Layout from './components/pages/layout'

// hero={1} services={2} video={3} sectors={4} statistics={5} projects={6} feedback={7} blog={8}

const pages = [
  {
    id: 1,
    item: () => {return(<Layout><Landing hero={1} services={2} video={3} sectors={4} statistics={5} projects={6} feedback={7} blog={8}/></Layout>)},
    path: '/',
  },
  {
    id: 2,
    item: () => {return(<Layout><Landing services={1} video={2} sectors={3} statistics={4} feedback={5} /></Layout>)},
    path: '/about',
  },
]

class App extends Component {
  render() {
    return (
      <Switch>
        {pages.map( page => {
          return (
            page.id === 1 ? <Route exact path={page.path} component={page.item} key={page.id} /> : <Route path={page.path} component={page.item} key={page.id} />
          )
        })}
      </Switch>
    )
  }
}

export default App;