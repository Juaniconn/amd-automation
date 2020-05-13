import React from 'react';

import Header from  './../molecules/header'
import Breadcrumbs from './../molecules/breadcrumbs'
import Landing from './../pages/landing'
import Footer from './../molecules/footer'

import { useParams } from "react-router-dom";

const pages = [
    {
      id: 1,
      item: () => {return(<Landing hero={1} services={2} video={3} sectors={4} statistics={5} projects={6} feedback={7} feedbackBackground={true} blog={8}/>)},
      path: 'home',
    },
    {
      id: 2,
      item: () => {return(<Landing services={1} video={2} sectors={3} statistics={4} feedback={5} feedbackBackground={false}/>)},
      path: 'about'
    },
    {
      id: 3,
      item: () => {return(<Landing sectors={1} services={2} feedback={3} feedbackBackground={false}/>)},
      path: 'services'
    },
    {
      id: 4,
      item: () => {return(<Landing projects={1} services={2} feedback={3} feedbackBackground={false}/>)},
      path: 'projects'
    },
    {
      id: 5,
      item: () => {return(<Landing />)},
      path: 'contact'
    },
]

const Layout = () => {
    let { id } = useParams();
    console.log(id)
    return (
        <>
            <Header/>
                { id !== "home" ? <Breadcrumbs path={id} /> : null }
                { pages.map( page => {
                    return(
                        <React.Fragment key={page.id}>
                            {id === page.path ? page.item() : null}
                        </React.Fragment>
                    )
                }) }
            <Footer/>
        </>
    )
}

export default Layout


