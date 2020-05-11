import React from 'react';
import { Grid, Box, Typography, Container, makeStyles } from '@material-ui/core'
import { Brush, Build, BubbleChart } from '@material-ui/icons'

const linkItemData = [
    { 
        id: 1,
        title: 'Maintenance',
        description: 'inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why.',
        icon: <Brush />
    },
    { 
        id: 2,
        title: 'Residental Service',
        description: 'inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why.',
        icon: <Build />
    },
    { 
        id: 3,
        title: 'Commercial Service',
        description: 'inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why.',
        icon: <BubbleChart />
    }
]

const useStyles = makeStyles((theme) => ({
    values: {
        padding: "5rem 0"
    },
    valuesItem: {
        color: "#222222",
    },
}));

const Values = () => {
    const classes = useStyles();
    return(
        <Box className={classes.values}>
            <Container fixed>
                <Grid container className="values" spacing={3}>
                    {linkItemData.map( item => {
                        return(
                            <Grid key={item.id} item xs={12} sm={4}>
                                <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
                                    {item.icon}
                                    <Typography className={classes.valuesItem} variant="h6">{item.title}</Typography>
                                    <Typography className={classes.valuesItem} variant="body1">{item.description}</Typography>
                                </Box>
                            </Grid>
                        )
                    })}
                </Grid> 
            </Container>
        </Box>
    )
}

export default Values