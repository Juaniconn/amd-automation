import React from 'react';
import { Grid , Box, Typography, Container, makeStyles } from '@material-ui/core'
import { Rating } from '@material-ui/lab';

const linkItemData = [
    { 
        id: 1,
        name: 'Fannie Rowe',
        description: 'Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.',
        raiting: 5,
    },
    { 
        id: 2,
        name: 'Fannie Rowe',
        description: 'Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.',
        raiting: 3,
    },
    { 
        id: 3,
        name: 'Fannie Rowe',
        description: 'Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.',
        raiting: 4,
    }
]

const useStyles = makeStyles((theme) => ({
    feedback: {
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
    feedbackItemTitle: {
        margin: "0.5rem 0",
        color: "white",
    },
    feedbackItemSubtitle: {
        margin: "0.5rem 0",
        color: "white",
    },
    feedbackItemBody: {
        margin: "0.5rem 0",
        color: "white",
        fontWeight: "lighter",
    },
    feedbackWrapper: {
        position: "relative",
        [theme.breakpoints.down('xs')]: {
            textAlign: "center",
        },
    },
}));

const Feedback = () => {
    const classes = useStyles();
    return(
        <Box className={classes.feedback}>
            <Container fixed>
                <Box className={classes.feedbackWrapper} display="flex" flexDirection="column" alignItems="center" margin="0 0 2.5rem" textAlign="center">
                    <Typography className={classes.feedbackItemTitle} variant="h3">Enjoy our Client’s Feedback</Typography>
                    <Typography className={classes.feedbackItemSubtitle} variant="subtitle1">Who are in extremely love with eco friendly system.</Typography>
                </Box>
                <Grid container className={classes.feedbackWrapper} spacing={3}>
                    {linkItemData.map( item => {
                        return (
                            <Grid item key={item.id} xs={12} md={4}>
                                <Typography className={classes.feedbackItemSubtitle} component="legend">{item.name}</Typography>
                                <Rating name="read-only" value={item.raiting} readOnly />
                                <Typography className={classes.feedbackItemBody} variant="body1">{item.description}</Typography>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </Box>
    )
}

export default Feedback