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
        backgroundColor: "white",
    },
    feedbackItem: {
        color: "#222222",
    },
    feedbackItemTitle: {
        margin: "0.5rem 0",
        color: "#222222",
    },
    feedbackItemSubTitle: {
        margin: "0.5rem 0",
        color: "#777",
    },
    feedbackItemBody: {
        margin: "0.5rem 0",
        color: "#777",
        fontWeight: "lighter",
    },
}));

const Feedback = () => {
    const classes = useStyles();
    return(
        <Box className={classes.feedback}>
            <Container fixed>
                <Box display="flex" flexDirection="column" alignItems="center" margin="0 0 2.5rem" textAlign="center">
                    <Typography className={classes.feedbackItemTitle} variant="h3">Enjoy our Client’s Feedback</Typography>
                    <Typography className={classes.feedbackItemSubtitle} variant="subtitle1">Who are in extremely love with eco friendly system.</Typography>
                </Box>
                <Grid container className={classes.feedbackWrapper} spacing={3}>
                    {linkItemData.map( item => {
                        return (
                            <Grid item key={item.id} xs={12} sm={4}>
                                <Typography component="legend">{item.name}</Typography>
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