import React from 'react';

import Header from  './../molecules/header'
import Footer from './../molecules/footer'

const Layout = ({ children, pageList }) => {
    return (
        <>
            <Header pageList={pageList}/>
              { children }
            <Footer/>
        </>
    )
}

export default Layout


