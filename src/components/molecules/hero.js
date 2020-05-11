import React from 'react';
import { Button, Typography, Box, makeStyles, Container } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    hero: {
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
            backgroundColor: "rgba(0,0,0,0.5)",
        },
    },
    heroItem:{
        margin: "0.5rem 0",
        color: "white",
    },
    heroItemButton:{
        margin: "0.5rem 0",
        backgroundColor: "#fab700",
        color: "white",
        "&:hover": {
            backgroundColor: "#C08000",
        }
    },
}));

const Hero = () => {
    const classes = useStyles();
    return (
        <Box className={classes.hero}>
            <Container fixed>
                <Box height="calc(100vh - 5rem)" display="flex" flexDirection="column" justifyContent="center" textAlign="center" maxWidth="60rem" margin="0 auto" position="relative">
                    <Typography className={classes.heroItem} variant="subtitle1">Don't look further, here is the key</Typography>
                    <Typography className={classes.heroItem} variant="h2">We're industrial solution</Typography >
                    <Typography className={classes.heroItem} variant="body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim. sed do eiusmod tempor incididunt</Typography>
                    <div><Button className={classes.heroItemButton} variant="text">Get started</Button></div>
                </Box>
            </Container>
        </Box>
    )
}

export default Hero