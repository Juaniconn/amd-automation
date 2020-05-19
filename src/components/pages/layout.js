import React from 'react';

import Header from  '../molecules/header'
import Breadcrumbs from  '../molecules/breadcrumbs'
import Footer from '../molecules/footer'

const Layout = ({ children, pageList, breadcrumbs, onClick, path }) => {
    return (
        <>
            <Header onClick={onClick} pageList={pageList}/>
                { breadcrumbs ? <Breadcrumbs path={path}/> : null }
                { children }
            <Footer/>
        </>
    )
}

export default Layout


