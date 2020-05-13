import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/pages/layout'

// hero={1} services={2} video={3} sectors={4} statistics={5} projects={6} feedback={7} blog={8}

const App = () => {
  return (
    <Switch>
      <Route exact path={`/`} component={Layout} />
      <Route path={`/:id`} component={Layout} />
    </Switch>
  )
}

export default App;