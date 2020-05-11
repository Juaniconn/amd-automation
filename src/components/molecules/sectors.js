import React from 'react';
import { Grid, Box, Typography, Container, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    sector: {
        padding: "5rem 0",
        backgroundColor: "white",
    },
    sectorWrapper: {
        [theme.breakpoints.down('xs')]: {
            textAlign: "center",
        },
    },
    sectorItem: {
        margin: "0.5rem 0",
        color: "#222222",
    },
    sectorItemSubtitle: {
        margin: "0.5rem 0",
        color: "#777"
    },
    sectorItemBody: {
        margin: "0.5rem 0",
        color: "#777",
        fontWeight: "lighter",
    },
    sectorItemImage: {
        width: "100%",
        height: "15rem", 
        objectFit: "cover",
        [theme.breakpoints.down('xs')]: {
            height: '12rem',
        },
    },
}));

const Sectors = () => {
    const classes = useStyles();
    return(
        <Box className={classes.sector}>
            <Container fixed>
                <Box display="flex" flexDirection="column" alignItems="center" margin="0 0 2.5rem" className={classes.sectorWrapper}>
                    <Typography className={classes.sectorItem} variant="h3">Our Capturing Market Sectors</Typography>
                    <Typography className={classes.sectorItemSubtitle} variant="subtitle1">Who are in extremely love with eco friendly system.</Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item sm={12} md={4} className={classes.sectorWrapper}>
                        <img src="https://images.pexels.com/photos/3815585/pexels-photo-3815585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className={classes.sectorItemImage} alt=""/>
                        <Typography className={classes.sectorItem} variant="h5">Automotive Engineering</Typography>
                        <Typography className={classes.sectorItemBody} variant="body1">inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.</Typography>
                    </Grid>
                    <Grid item sm={12} md={4} className={classes.sectorWrapper}>
                        <img src="https://images.pexels.com/photos/3734606/pexels-photo-3734606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className={classes.sectorItemImage} alt=""/>
                        <Typography className={classes.sectorItem} variant="h5">Construction & Engineering</Typography>
                        <Typography className={classes.sectorItemBody} variant="body1">inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.</Typography>
                    </Grid>
                    <Grid item sm={12} md={4} className={classes.sectorWrapper}>
                        <img src="https://images.pexels.com/photos/3734609/pexels-photo-3734609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className={classes.sectorItemImage} alt=""/>
                        <Typography className={classes.sectorItem} variant="h5">Industrial Engineering</Typography>
                        <Typography className={classes.sectorItemBody} variant="body1">inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Sectors