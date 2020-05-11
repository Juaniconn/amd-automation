import React from 'react';
import { Grid, Box, Typography, Container, makeStyles, Button } from '@material-ui/core'
import Youtube from 'react-youtube'

const useStyles = makeStyles((theme) => ({
    video: {
        padding: "5rem 0",
        backgroundColor: "#f9f9ff",
    },
    videoWrapper: {
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center',
        },
    },
    videoItem: {
        margin: "0.5rem 0",
        color: "#222222",
    },
    videoItemButton: {
        margin: "0.5rem 0",
        color: "white",
        backgroundColor: "#fab700",
        "&:hover": {
            backgroundColor: "#C08000",
        }
    },
    videoItemSubtitle: {
        margin: "0.5rem 0",
        color: "#fab700",
    },
    videoItemBody: {
        margin: "0.5rem 0",
        color: "#777",
        fontWeight: "lighter",
    },
    videoItemYouTube: {
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            height: '15rem',
        },
    },
}));

const Video = () => {
    const classes = useStyles();
    return(
        <Box className={classes.video}>
            <Container fixed>
                <Grid container spacing={3}>
                    <Grid item sm={12} md={6} className={classes.videoWrapper}>
                        <Typography className={classes.videoItemSubtitle} variant="subtitle1">Brand new app to blow your mind</Typography>
                        <Typography className={classes.videoItem} variant="h3">We’ve made a life that will change you</Typography>
                        <Typography className={classes.videoItem} variant="subtitle2">We are here to listen from you deliver exellence</Typography>
                        <Typography className={classes.videoItemBody} variant="body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</Typography>
                        <div><Button className={classes.videoItemButton} variant="text">Get started</Button></div>
                    </Grid>
                    <Grid item sm={12} md={6} style={{width: "100%"}}>
                        <Youtube videoId="kFdvebfJvMo" className={classes.videoItemYouTube}/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Video