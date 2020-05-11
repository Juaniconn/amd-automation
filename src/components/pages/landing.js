import React from 'react';

import Header from  './../molecules/header'
import Hero from  './../molecules/hero'
import Values from  './../molecules/values'
import Video from  './../molecules/video'
import Sectors from  './../molecules/sectors'
import Statistics from  './../molecules/statistics'
import Gallery from  './../molecules/gallery'
import Feedback from './../molecules/feedback'

import { Divider } from '@material-ui/core'

const Landing = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <Values/>
            <Video/>
            <Sectors/>
            <Statistics/>
            <Gallery/>
            <Divider/>
            <Feedback/>
        </>
    )
}

export default Landing


