import React from 'react';

import Hero from  './../molecules/hero'
import Services from  './../molecules/services'
import Video from  './../molecules/video'
import Sectors from  './../molecules/sectors'
import Statistics from  './../molecules/statistics'
import Projects from  './../molecules/projects'
import Feedback from './../molecules/feedback'
import Blog from './../molecules/blog'
import Contact from './../molecules/contact'
import Shop from './../molecules/shop'


const Landing = (props) => {
    
    const initialList = [
        {
            id: 1,
            item: <Hero/>,
            index: props.hero ? props.hero : null,
        },
        {
            id: 2,
            item: <Services />,
            index: props.services ? props.services : null,
        },
        {
            id: 3,
            item: <Video />,
            index: props.video ? props.video : null,
        },
        {
            id: 4,
            item: <Sectors />,
            index: props.sectors ? props.sectors : null,
        },
        {
            id: 5,
            item: <Statistics />,
            index: props.statistics ? props.statistics : null,
        },
        {
            id: 6,
            item: <Projects />,
            index: props.projects ? props.projects : null,
        },
        {
            id: 7,
            item: <Feedback feedbackBackground={props.feedbackBackground} />,
            index: props.feedback ? props.feedback : null,
        },
        {
            id: 8,
            item: <Blog />,
            index: props.blog ? props.blog : null,
        },
        {
            id: 9,
            item: <Contact />,
            index: props.contact ? props.contact : null,
        },
        {
            id: 10,
            item: <Shop onClick={props.onClick} />,
            index: props.shop ? props.shop : null,
        },
    ]

    const orderIndex = (a, b) => {
        const indexA = a.index
        const indexB = b.index
    
        let comparison = indexA > indexB ? 1 : indexA < indexB ?  -1 : 0
        return comparison
    }

    initialList.sort(orderIndex);
    
    return (
        <>
            {initialList.map( list => {
                
                return (
                    <React.Fragment key={list.id}>
                        {list.index === null ? null : list.item}
                    </React.Fragment>
                )
            })}
        </>
    )
}

export default Landing


