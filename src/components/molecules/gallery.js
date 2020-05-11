import React from 'react';
import { Box, Typography, Container, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    gallery: {
        padding: "5rem 0",
        backgroundColor: "white",
    },
    galleryWrapper: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
        gap: "2rem",
    },
    galleryItemImage: {
        width: "100%",
        height: "20rem",
        objectFit: "cover",
        margin: "0",
        position: "relative",
        cursor: "pointer",
        [theme.breakpoints.down('sm')]: {
            height: "12rem",
        },
        "&::before": {
            position: "absolute",
            content: "''",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            backgroundColor: "rgba(0,0,0,0.2)",
            transition: "450ms all",
            zIndex: "1",
        },
        "&:hover:before": {
            backgroundColor: "rgba(255,255,255,0.2)",
        }
    },
    galleryItemImageA: {
        gridColumn:"span 2",
        [theme.breakpoints.down('sm')]: {
            gridColumn:"span 1",
        },
    },
    galleryItemTitle: {
        margin: "0.5rem 0",
        color: "#222222",
    },
    galleryItemSubTitle: {
        margin: "0.5rem 0",
        color: "#777",
    }
}));

const linkItemData = [
    { 
        id: 1,
        url: 'https://images.pexels.com/photos/2451568/pexels-photo-2451568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        gridColumn: true,
    },
    { 
        id: 2,
        url: 'https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        gridColumn: false,
    },
    { 
        id: 3,
        url: 'https://images.pexels.com/photos/3774042/pexels-photo-3774042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        gridColumn: false,
    },
    { 
        id: 4,
        url: 'https://images.pexels.com/photos/3182822/pexels-photo-3182822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        gridColumn: true,
    },
]

const Gallery = () => {
    const classes = useStyles();
    return(
        <Box className={classes.gallery}>
            <Container fixed>
                <Box display="flex" flexDirection="column" alignItems="center" margin="0 0 2.5rem" textAlign="center">
                    <Typography className={classes.galleryItemTitle} variant="h3">Latest Finished Projects</Typography>
                    <Typography className={classes.galleryItemSubtitle} variant="subtitle1">Who are in extremely love with eco friendly system.</Typography>
                </Box>
                <Box className={classes.galleryWrapper}>
                    {linkItemData.map( item => {
                        return(
                            <figure key={item.id} className={`${classes.galleryItemImage} ${item.gridColumn ? classes.galleryItemImageA : null}`} >
                                <img width="100%" height="100%" style={{objectFit: 'cover'}} src={item.url}  alt=""/>
                            </figure>
                        )
                    })}
                </Box>
            </Container>
        </Box>
    )
}

export default Gallery