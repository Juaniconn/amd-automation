import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Landing from './components/pages/landing'
import Layout from './components/pages/layout'
import StoreIcon from '@material-ui/icons/Store';

// hero={1} services={2} video={3} sectors={4} statistics={5} projects={6} feedback={7} blog={8}

const pages = [
  {
    id: 1,
    index: '',
    item: (pageList, path, onClick) => {return(<Layout onClick={onClick} pageList={pageList} path={path} breadcrumbs={false}><Landing onClick={onClick} hero={1} services={2} video={3} sectors={4} statistics={5} projects={6} feedback={7} feedbackBackground={true} blog={8}/></Layout>)},
  },
  {
    id: 2,
    index: 'about',
    item: (pageList, path, onClick) => {return(<Layout onClick={onClick} pageList={pageList} path={path} breadcrumbs={true}><Landing onClick={onClick} services={1} video={2} sectors={3} statistics={4} feedback={5} feedbackBackground={false}/></Layout>)},
  },
  {
    id: 3,
    index: 'services',
    item: (pageList, path, onClick) => {return(<Layout onClick={onClick} pageList={pageList} path={path} breadcrumbs={true}><Landing onClick={onClick} sectors={1} services={2} feedback={3} feedbackBackground={false}/></Layout>)},
  },
  {
    id: 4,
    index: 'projects',
    item: (pageList, path, onClick) => {return(<Layout onClick={onClick} pageList={pageList} path={path} breadcrumbs={true}><Landing onClick={onClick} projects={1} services={2} feedback={3} feedbackBackground={false}/></Layout>)},
  },
  {
    id: 5,
    index: 'contact',
    item: (pageList, path, onClick) => {return(<Layout onClick={onClick} pageList={pageList} path={path} breadcrumbs={true}><Landing onClick={onClick} contact={1}/></Layout>)},
  },
  {
    id: 6,
    index: 'blog',
    item: (pageList, path, onClick) => {return(<Layout onClick={onClick} pageList={pageList} path={path} breadcrumbs={true}><Landing onClick={onClick} blog={1}/></Layout>)},
  },
  {
    id: 7,
    index: 'tienda',
    icon: <StoreIcon></StoreIcon>,
    item: (pageList, path, onClick) => {return(<Layout onClick={onClick} pageList={pageList} path={path} breadcrumbs={false}><Landing onClick={onClick} shop={1}/></Layout>)},
  },
]


class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
          url: null,
      }

      this.changeUrl = this.changeUrl.bind(this)
  }

  changeUrl(match, url){
      if(url === ""){
        this.setState({
            url: `${match}`,
        })
        this.props.history.push(`${match}`) 
      } else{
        this.setState({
          url: `${match}/${url}`,
      })
        this.props.history.push(`${match}/${url}`) 
      }
    }
    
    render(){
      return (
      <Switch>
          { pages.map(page =>{
            return(
              page.id === 1 ?
                <Route key={page.id} exact path={`/${page.index}`}>
                  { page.item(pages, page.index, this.changeUrl) }
                </Route> 
                : 
                <Route key={page.id} path={`/${page.index}`}>
                  { page.item(pages, page.index, this.changeUrl) }
                </Route>
              )
          })}
        </Switch>
    )
  }
}

export default withRouter(App)