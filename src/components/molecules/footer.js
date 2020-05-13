import React from 'react';
import { Grid, Box, Typography, Container, Button, Link, makeStyles } from '@material-ui/core'

import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: "5rem 0",
        backgroundImage:"url('https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        position: "relative",
        "&::before": {
            position: "absolute",
            content: "''",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            backgroundColor: "rgba(0,0,0,0.8)",
        },
    },
    footerItemTextfield: {
        padding: "0.75rem 1rem",
        outline: "none",
        border: "none"
    },
    footerItemButton: {
        height: "auto",
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
    footerItemTitle: {
        margin: "0.5rem 0",
        color: "white",
    },
    footerItemBody: {
        margin: "0.5rem 0",
        color: "white",
        fontWeight: "lighter",
    },
    footerWrapper: {
        position: "relative",
        margin: "0 auto",
        [theme.breakpoints.down('xs')]: {
            textAlign: "center",
        },
    },
    footerItemSocialItem: {
        color: "white",
        "&:hover": {
            color: "#fab700",
        },
    },
    footerItemSocialWrapper: {
        width: "10rem",
    },
}));

const Footer = () => {
    const classes = useStyles();
    return(
        <Box className={classes.footer}>
            <Container fixed>
                <Grid container spacing={3}>
                    <Grid item sm={12} md={4} className={classes.footerWrapper}>
                        <Typography className={classes.footerItemTitle} variant="h6">About Us</Typography>
                        <Typography className={classes.footerItemBody} variant="body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</Typography>
                        <Typography className={classes.footerItemBody} variant="body2">Copyright ©2020 All rights reserved</Typography>
                    </Grid>
                    <Grid item sm={12} md={4} className={classes.footerWrapper}>
                        <Typography className={classes.footerItemTitle} variant="h6">Newsletter</Typography>
                        <Typography className={classes.footerItemBody} variant="body1">Stay update with our latset news</Typography>
                        <form action="/" method="post" style={{display: 'flex'}}><input className={classes.footerItemTextfield} type="email-address" placeholder="Enter Email" required/><Button className={classes.footerItemButton} variant="contained" type="submit">Enviar</Button></form>
                    </Grid>
                    <Grid item sm={12} md={4} className={classes.footerWrapper}>
                        <Typography className={classes.footerItemTitle} variant="h6">Follow Us</Typography>
                        <Typography className={classes.footerItemBody} variant="body1">Let us be social</Typography>
                        <Box display="flex" justifyContent="space-between" className={classes.footerItemSocialWrapper}>
                            <Link className={classes.footerItemSocialItem} href="https://twitter.com"><TwitterIcon></TwitterIcon></Link>
                            <Link className={classes.footerItemSocialItem} href="https://youtube.com"><YouTubeIcon></YouTubeIcon></Link>
                            <Link className={classes.footerItemSocialItem} href="https://facebook.com"><FacebookIcon></FacebookIcon></Link>
                            <Link className={classes.footerItemSocialItem} href="https://instagram.com"><InstagramIcon></InstagramIcon></Link>
                        </Box>
                    </Grid>
                </Grid> 
            </Container>
        </Box>
    )
}

export default Footer