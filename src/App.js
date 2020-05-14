import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/pages/landing'
import Layout from './components/pages/layout'

// hero={1} services={2} video={3} sectors={4} statistics={5} projects={6} feedback={7} blog={8}

const pages = [
  {
    id: 1,
    index: '',
    item: (path) => {return(<Layout pageList={path} breadcrumbs={false}><Landing hero={1} services={2} video={3} sectors={4} statistics={5} projects={6} feedback={7} feedbackBackground={true} blog={8}/></Layout>)},
  },
  {
    id: 2,
    index: 'about',
    item: (path) => {return(<Layout pageList={path} breadcrumbs={true}><Landing services={1} video={2} sectors={3} statistics={4} feedback={5} feedbackBackground={false}/></Layout>)},
  },
  {
    id: 3,
    index: 'services',
    item: (path) => {return(<Layout pageList={path} breadcrumbs={true}><Landing sectors={1} services={2} feedback={3} feedbackBackground={false}/></Layout>)},
  },
  {
    id: 4,
    index: 'projects',
    item: (path) => {return(<Layout pageList={path} breadcrumbs={true}><Landing projects={1} services={2} feedback={3} feedbackBackground={false}/></Layout>)},
  },
  {
    id: 5,
    index: 'contact',
    item: (path) => {return(<Layout pageList={path} breadcrumbs={true}><Landing contact={1}/></Layout>)},
  },
]

const App = () => {
  return (
      <Switch>
        { pages.map(page =>{
          return(
            <Route key={page.id} exact path={`/${page.index}`}>
              { page.item(pages) }
            </Route>
          )
        })}
      </Switch>
  )
}

export default App;