import React from 'react';
import { Link, makeStyles, Box, Container, Drawer, Button } from "@material-ui/core"
import { withRouter } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';

const linkItemData = [
    { 
        id: 1,
        name: 'Home',
        link: "/"
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
        [theme.breakpoints.down('sm')]: {
            padding: "0.75rem 0",
        },
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
        margin: "0",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
        },
    },
    navListItem: {
        padding: "2rem 1rem",
        display: "block",
        fontSize: "0.8rem",
        cursor: "pointer",
        color: "#222",
        '&:hover': {
            textDecoration: "none",
            backgroundColor: "#fab700",
            color: "white",
        },
        [theme.breakpoints.down('sm')]: {
            color: "white",
            textAlign: "center",
        },
    },
    hamburgerButton: {
        display: "none",
        alignItems: "center",
        [theme.breakpoints.down('sm')]: {
            display: "flex",
        },
        "& .MuiDrawer-paperAnchorLeft": {
            width: "12rem",
            [theme.breakpoints.down('sm')]: {
                display: "flex",
                justifyContent: "center",
            },
            backgroundColor: "#111",
        }
    },
    headerLogo: {
        width: "10rem",
        [theme.breakpoints.down('sm')]: {
            width: "5rem",
        },
    },
}));

const Header = (props) => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });
    const toggleDrawer = (anchor, open, item) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }   
    
        setState({ ...state, [anchor]: open });
        props.history.push(item)
    };
    return (
        <Box className={classes.header} position="sticky" top={0} left={0} right={0} zIndex={1000}>
            <Container fixed>
                <Box className={classes.headerWrapper} display="flex" justifyContent="space-between" alignItems="center">
                    <img className={classes.headerLogo} onClick={() => props.history.push('/')} style={{cursor: 'pointer'}} src="https://raw.githubusercontent.com/ElJuanii00/AMD_Autoamtion/master/images_originals/amd_logo_transparent.png" alt=""/>
                    <nav className={classes.nav}>
                        <ul className={classes.navList}>
                            {linkItemData.map( item => {
                                return (
                                    <li key={ item.id } style={{listStyle: "none"}}><Link onClick={() => props.history.push(item.link)} className={classes.navListItem}>{ item.name }</Link></li>
                                )
                            })}
                        </ul>
                    </nav>
                    <Button className={classes.hamburgerButton} style={{position: 'absolute', right: "0", color: '#222'}} onClick={toggleDrawer('left', true)}><MenuIcon></MenuIcon></Button>
                    <Drawer className={classes.hamburgerButton} anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                        <ul className={classes.navList}>
                            {linkItemData.map( item => {
                                return (
                                    <li key={ item.id } style={{listStyle: "none"}}><Link onClick={toggleDrawer('left', false, item.link)} className={classes.navListItem}>{ item.name }</Link></li>
                                )
                            })}
                        </ul>
                    </Drawer>
                </Box>
            </Container>
        </Box>
    )
}

export default withRouter(Header)

