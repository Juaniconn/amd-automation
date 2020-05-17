import React from 'react';
import { Link, makeStyles, Box, Container, Drawer, Button } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: "white",
        boxShadow: ".1rem .2rem 1rem 0rem rgba(0,0,0,0.25)",
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
        height: "5rem",
        [theme.breakpoints.down('sm')]: {
            display: "none",
        },
    },
    navList: {
        display: "flex",
        height: "100%",
        margin: "0",
        [theme.breakpoints.down('sm')]: {
            padding: "2rem 0 0",
            flexDirection: "column",
            justifyContent: "flex-start",
        },
    },
    navListItem: {
        padding: "0rem 1rem",
        height: "100%",
        alignItems: "center", 
        display: "flex",
        textTransform: "capitalize",
        cursor: "pointer",
        color: "#222",
        '&:hover': {
            textDecoration: "none",
            backgroundColor: "#fab700",
            color: "white",
        },
        [theme.breakpoints.down('sm')]: {
            padding: "1rem 1rem",
            display: "block",
            color: "white",
            textAlign: "start",
            paddingLeft: "2rem",
        },
    },
    hamburgerButton: {
        display: "none",
        alignItems: "center",
        [theme.breakpoints.down('sm')]: {
            display: "flex",
        },
        "& .MuiDrawer-paperAnchorLeft": {
            width: "15rem",
            [theme.breakpoints.down('sm')]: {
                display: "flex",
                justifyContent: "center",
            },
            backgroundColor: "#0e0e0e",
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
            return console.log(open);
        }
        if (item !== undefined){
            props.onClick(`/${item.index}`, '')
        }
        setState({ ...state, [anchor]: open });
    };
    return (
        <Box className={classes.header} position="sticky" top={0} left={0} right={0} zIndex={1000}>
            <Container fixed>
                <Box className={classes.headerWrapper} display="flex" justifyContent="space-between" alignItems="center">
                    <img className={classes.headerLogo} onClick={() => props.onClick('/', '')} style={{cursor: 'pointer'}} src="https://raw.githubusercontent.com/ElJuanii00/AMD_Autoamtion/master/images_originals/amd_logo_transparent.png" alt=""/>
                    <nav className={classes.nav}>
                        <ul className={classes.navList}>
                            {props.pageList.map( item => {
                                return (
                                    <li key={ item.id } style={{listStyle: "none"}}><Link onClick={() => props.onClick(`/${item.index}`, '')} className={classes.navListItem}>{ item.index === '' ? 'Home' : (item.icon ? item.icon : item.index) }</Link></li>
                                )
                            })}
                            <li style={{listStyle: "none"}}><Link className={classes.navListItem}><ShoppingCartIcon/></Link></li>
                        </ul>
                    </nav>
                    <Button className={classes.hamburgerButton} style={{position: 'absolute', right: "0", color: '#222'}} onClick={toggleDrawer('left', true)}><MenuIcon/></Button>
                    <Drawer className={classes.hamburgerButton} anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                        <ul className={classes.navList}>
                            {props.pageList.map( item => {
                                return (
                                    <li key={ item.id } style={{listStyle: "none"}}><Link onClick={toggleDrawer('left', false, item)} className={classes.navListItem}>{ item.index === '' ? 'Home' : (item.icon ? item.icon : item.index) }</Link></li>
                                )
                            })}
                            <li style={{listStyle: "none"}}><Link className={classes.navListItem}><ShoppingCartIcon/></Link></li>
                        </ul>
                    </Drawer>
                </Box>
            </Container>
        </Box>
    )
}

export default Header


