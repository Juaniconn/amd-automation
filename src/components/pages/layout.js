import React from 'react';

import Header from  '../molecules/header'
import Breadcrumbs from  '../molecules/breadcrumbs'
import Footer from '../molecules/footer'

const Layout = ({ children, pageList, breadcrumbs, onClick }) => {
    return (
        <>
            <Header onClick={onClick} pageList={pageList}/>
                { breadcrumbs ? <Breadcrumbs/> : null }
                { children }
            <Footer/>
        </>
    )
}

export default Layout


