import React from 'react';
import { Link, Breadcrumbs, Typography, makeStyles, Box, Container } from "@material-ui/core"
import { withRouter } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    breadcrumbs: {
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
    breadcrumbsWrapper:{
        position: "relative",
        color: "white",
        [theme.breakpoints.down('sm')]: {
            justifyContent: "center",
        },
    },
}));

const HeaderBreadcrumbs = (props) => {
    const classes = useStyles();
    return (
        <Box className={classes.breadcrumbs}>
            <Container fixed>
                <Breadcrumbs className={classes.breadcrumbsWrapper} aria-label="breadcrumb">
                    <Link color="inherit" href="" onClick={() => props.history.push('/')}>Home</Link>
                    <Typography style={{textTransform: 'capitalize'}} color="inherit">{props.path}</Typography>
                </Breadcrumbs>
            </Container>
        </Box>
    )
}

export default withRouter(HeaderBreadcrumbs)


