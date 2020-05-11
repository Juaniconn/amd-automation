import React from 'react';
import { Grid, Box, Typography, Container, makeStyles } from '@material-ui/core'

const linkItemData = [
    { 
        id: 1,
        title: 'Projects Completed',
        description: '5K+',
    },
    { 
        id: 2,
        title: 'Happy Clients',
        description: '959',
    },
]

const useStyles = makeStyles((theme) => ({
    statistics: {
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
            backgroundColor: "rgba(0,0,0,0.5)",
        },
    },
    statisticsWrapper: {
        position: "relative",
    },
    statisticsItemWrapper: {
        width: "7.5rem",
        height: "7.5rem",
        border: "2px solid #fab700",
        borderRadius: "50%",
    },
    statisticsItemBody: {
        textAlign: "center",
        color: "white",
        backgroundColor: "#fab700",
        borderRadius: "50%",
        lineHeight: "5rem",
        width: "5rem",
    },
    statisticsItem: {
        textAlign: "center",
        color: "white",
    },
}));

const Statistics = () => {
    const classes = useStyles();
    return(
        <Box className={classes.statistics}>
            <Container fixed>
                <Grid container spacing={3}>
                    {linkItemData.map( item => {
                        return(
                            <Grid key={item.id} className={classes.statisticsWrapper}  item xs={12} sm={6}>
                                <Box marginBottom="1rem" display="flex" justifyContent="center" alignItems="center">
                                    <Box className={classes.statisticsItemWrapper} display="flex" justifyContent="center" alignItems="center" textAlign="center">
                                        <Typography className={classes.statisticsItemBody} variant="body1">{item.description}</Typography>
                                    </Box>
                                </Box>
                                <Typography className={classes.statisticsItem} variant="h6">{item.title}</Typography>
                            </Grid>
                        )
                    })}
                </Grid> 
            </Container>
        </Box>
    )
}

export default Statistics