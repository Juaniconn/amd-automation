import React from 'react';
import { Link, makeStyles, Box, Container } from "@material-ui/core"
import { withRouter } from 'react-router-dom'

const linkItemData = [
    { 
        id: 1,
        name: 'Home',
        link: '/home'
    },
    { 
        id: 2,
        name: 'About',
        link: '/about'
    },
    { 
        id: 3,
        name: 'Service',
        link: '/services'
    },
    { 
        id: 4,
        name: 'Projects',
        link: '/projects'
    },
    { 
        id: 5,
        name: 'Contact',
        link: '/contact'
    },
]

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: "white",
    },
    headerWrapper:{
        [theme.breakpoints.down('sm')]: {
            justifyContent: "center",
        },
    },
    nav:{
        [theme.breakpoints.down('sm')]: {
            display: "none",
        },
    },
    navList: {
        display: "flex",
        padding: "0",
    },
    navListItem: {
        padding: "2rem 1rem",
        fontSize: "1rem",
        cursor: "pointer",
        '&:hover': {
            textDecoration: "none",
        },
    },
}));

const Header = (props) => {
    const classes = useStyles();
    return (
        <Box className={classes.header} position="sticky" top={0} left={0} right={0} zIndex={9999}>
            <Container fixed>
                <Box className={classes.headerWrapper} height="5rem"  display="flex" justifyContent="space-between" alignItems="center">
                    <h1 style={{margin: "0"}}>Logo</h1>
                    <nav className={classes.nav}>
                        <ul className={classes.navList}>
                            {linkItemData.map( item => {
                                return (
                                    <li key={ item.id } style={{listStyle: "none"}}><Link href="" onClick={() => props.history.push(item.link)} className={classes.navListItem}>{ item.name }</Link></li>
                                )
                            })}
                        </ul>
                    </nav>
                </Box>
            </Container>
        </Box>
    )
}

export default withRouter(Header)


