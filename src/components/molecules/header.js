import React from 'react';
import { Link, makeStyles, Box, Container, Drawer, Button, IconButton, Divider, Grid, Typography } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

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
        },
    },
    checkoutDrawer: {
        "& .MuiDrawer-paperAnchorRight": {
            padding: "1.5rem 2.5rem",
            width: "21rem",
            justifyContent: "flex-start",
            backgroundColor: "#0e0e0e",
        }
    },
    checkoutNavList: {
        display: "flex",
        margin: "0",
        padding: "0",
        flexDirection: "column",
        justifyContent: "flex-start",
    },
    checkoutNavListItem: {
        padding: "1rem 0rem",
        height: "100%",
        display: "flex",
        textTransform: "capitalize",
        cursor: "pointer",
        color: "#222",
        '&:hover': {
            textDecoration: "none",
            backgroundColor: "#fab700",
            color: "white",
        },
    },
    checkoutButton: {
        width: "100%",
        outline: "none",
        fontSize: ".75rem",
        borderRadius: "0",
        border: "none",
        backgroundColor: "#fab700",
        color: "white",
        "&:hover": {
            backgroundColor: "#C08000",
        },
    },
    headerLogo: {
        width: "10rem",
        [theme.breakpoints.down('sm')]: {
            width: "5rem",
        },
    },
}));

const linkItemData = [
    { 
        id: 1,
        url: 'https://images-na.ssl-images-amazon.com/images/I/71K3-rYkPHL._UX466_.jpg',
        titleProduct: "title-product-a-A",
        descriptionProduct: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        priceProduct: "$100",
    },
    { 
        id: 2,
        url: 'https://images-na.ssl-images-amazon.com/images/I/71vKc2FPyrL._UX522_.jpg',
        titleProduct: "title-product-a-B",
        descriptionProduct: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        priceProduct: "$100",
    },
]

const Header = (props) => {
    const classes = useStyles();
    const [stateLeft, setStateLeft] = React.useState({left: false});
    const [stateRight, setStateRight] = React.useState({right: false});
    const toggleDrawer = (anchor, open, item) => (event) => {
        if (item !== undefined){
            if(item.index !== 'checkout'){
                props.onClick(`/${item.index}`, '')
            } else{
                toggleCloseDrawerLeft('right', true)
            }
        }
        setStateLeft({[anchor]: open})
    };
    const toggleDrawerRight = (anchor, open) => (event) => {
        setStateRight({[anchor]: open})
    };
    
    const toggleCloseDrawerLeft = (anchor, open) => {
        setStateRight({[anchor]: open})
    }

    return (
        <Box className={classes.header} position="sticky" top={0} left={0} right={0} zIndex={1000}>
            <Container fixed>
                <Box className={classes.headerWrapper} display="flex" justifyContent="space-between" alignItems="center">
                    <img className={classes.headerLogo} onClick={() => props.onClick('/', '')} style={{cursor: 'pointer'}} src="https://raw.githubusercontent.com/ElJuanii00/AMD_Autoamtion/master/images_originals/amd_logo_transparent.png" alt=""/>
                    <nav className={classes.nav}>
                        <ul className={classes.navList}>
                            {props.pageList.map( item => {
                                return (
                                    <li key={ item.id } style={{listStyle: "none"}}><Link onClick={item.index !== 'checkout' ? () => props.onClick(`/${item.index}`, '') : toggleDrawerRight('right', true)} className={classes.navListItem}>{ item.index === '' ? 'Home' : (item.icon ? item.icon : item.index) }</Link></li>
                                )
                            })}
                            {/* <li style={{listStyle: "none"}}><Link className={classes.navListItem}><ShoppingCartIcon/></Link></li> */}
                        </ul>
                    </nav>
                    <Button className={classes.hamburgerButton} style={{position: 'absolute', right: "0", color: '#222'}} onClick={toggleDrawer('left', true)}><MenuIcon/></Button>
                    <Drawer className={classes.hamburgerButton} anchor={'left'} open={stateLeft['left']} onClose={toggleDrawer('left', false)}>
                        <ul className={classes.navList}>
                            {props.pageList.map( item => {
                                return (
                                    <li key={ item.id } style={{listStyle: "none"}}><Link onClick={toggleDrawer('left', false, item)} className={classes.navListItem}>{ item.index === '' ? 'Home' : (item.icon ? item.icon : item.index) }</Link></li>
                                )
                            })}
                            {/* <li style={{listStyle: "none"}}><Link className={classes.navListItem}><ShoppingCartIcon/></Link></li> */}
                        </ul>
                    </Drawer>
                    <Drawer className={classes.checkoutDrawer} anchor={'right'} open={stateRight['right']} onClose={toggleDrawerRight('right', false)}>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Typography style={{color: 'white'}} variant="h6">Bag</Typography>
                            <IconButton style={{padding: "0"}} onClick={toggleDrawerRight('right', false)}>
                                <CloseIcon style={{color: 'white'}}/>
                            </IconButton>
                        </Box>
                        <Divider style={{backgroundColor: 'white', margin: "1rem 0"}}/>
                        <Box height="100%" display="flex" flexDirection="column" justifyContent="space-between">
                            <ul className={classes.checkoutNavList}>
                                {linkItemData.map(item =>{
                                    return(
                                        <li key={item.id} style={{listStyle: "none", marginBottom: "1rem"}}>
                                            <Grid container spacing={3}>
                                                <Grid item xs={4}>
                                                    <figure style={{height: "6rem", width: "100%", margin: "0", backgroundColor: "white"}}>
                                                        <img width="100%" height="100%" style={{objectFit: "contain"}} src={item.url} alt=""/>
                                                    </figure>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Typography style={{color: 'white', fontSize: "0.9rem", textTransform: "capitalize" }} variant="subtitle1">{item.titleProduct}</Typography>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <Typography style={{color: 'white', fontSize: "0.9rem"}} variant="subtitle1">{item.priceProduct}</Typography>
                                                </Grid>
                                            </Grid>
                                        </li>
                                    )
                                })}
                            </ul>
                            <Button className={classes.checkoutButton} variant="contained">Checkout</Button>
                        </Box>
                    </Drawer>
                </Box>
            </Container>
        </Box>
    )
}

export default Header


