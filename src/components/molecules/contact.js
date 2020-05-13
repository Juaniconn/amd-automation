import React from 'react';
import { Box, Grid, Typography, Container, TextField, TextareaAutosize, Button, makeStyles } from '@material-ui/core'

import Map from './../atoms/map'

import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
    contact: {
        padding: "5rem 0",
    },
    contactItemTitle: {
        margin: "0.5rem 0",
        color: "#222",
    },
    contactItemSubtitle: {
        margin: "0.5rem 0",
        color: "#222",
    },
    contactItemBody: {
        margin: "0.5rem 0",
        color: "#777",
        fontWeight: "lighter",
    },
    contactWrapper: {
        position: "relative",
        [theme.breakpoints.down('xs')]: {
            textAlign: "center",
        },
    },
    contactInfoItem: {
        [theme.breakpoints.down('xs')]: {
            margin: "0 0 0rem",
        },
    },
    contactInfoItemButton: {
        margin: "0.5rem 0 0.5rem auto",
        color: "white",
        outline: "none",
        cursor: "pointer !important",
        border: "none",
        padding: "0.2rem 1rem",
        backgroundColor: "#fab700",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        },
        "&:after": {
            border: "none !important",
        },
        "&:before": {
            border: "none",
        },
        
        "&:hover": {
            backgroundColor: "#C08000",
        },
        "&:hover:not(.Mui-disabled):before": {
            border: "none",
        }
    },
    contactInfoItemTextfield: {
        "& .MuiFormLabel-root.Mui-focused": {
            color: "#fab700" 
        }
    },
    contactMap: {
        position: "relative",
        width: "100%",
        height: "30rem",
        [theme.breakpoints.down('sm')]: {
            height: "20rem",
        },
    },
}));

const Feedback = () => {
    const classes = useStyles();
    return(
        <Box className={classes.contact}>
            <Container fixed>
                <Box className={classes.contactWrapper} display="flex" flexDirection="column" alignItems="center" margin="0 0 2.5rem" textAlign="center">
                    <Typography className={classes.contactItemTitle} variant="h3">Contact Us</Typography>
                    <Typography className={classes.contactItemSubtitle} variant="subtitle1">Follow the next steps to reach out our services</Typography>
                </Box>
                {/* <iframe className={classes.contactMap} title="1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d848.3401401148628!2d-106.44999617076185!3d31.733357939447586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e7595181c314c1%3A0x383f0457b82a4c36!2sRubio%20450%2C%20Nogales%20Nte.%2C%20Cd%20Ju%C3%A1rez%2C%20Chih.!5e0!3m2!1ses-419!2smx!4v1589342731812!5m2!1ses-419!2smx" frameBorder="0" style={{border: '0', margin: "0 0 2.5rem"}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe> */}
                <Box className={classes.contactMap} margin="0 0 2.5rem"><Map apiKey={process.env.REACT_APP_GOOGLEMAPS_API_KEY}/></Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4} className={classes.contactInfoItem}> 
                        <Grid item container xs={12} spacing={1}>
                            <Grid item container>
                                <Grid item xs={2}>
                                    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                                        <HomeIcon style={{fontSize: "2.5rem", color: "#fab700"}}/>
                                    </Box>
                                </Grid>
                                <Grid item xs={10}>
                                    <Box display="flex" flexDirection="column">
                                        <Typography variant="subtitle1">Ciudad Juárez, Chihuahua, México</Typography>
                                        <Typography variant="body2">Julian Carrillo 4015</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid item container>
                                <Grid item xs={2}>
                                    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                                        <WhatsAppIcon style={{fontSize: "2.5rem", color: "#fab700"}}/>
                                    </Box>
                                </Grid>
                                <Grid item xs={10}>
                                    <Box display="flex" flexDirection="column">
                                        <Typography variant="subtitle1">00 (880) 9865 562</Typography>
                                        <Typography variant="body2">Mon to Fri 9am to 6 pm</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid item container>
                                <Grid item xs={2}>
                                    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                                        <PhoneIcon style={{fontSize: "2.5rem", color: "#fab700"}}/>
                                    </Box>
                                </Grid>
                                <Grid item xs={10}>
                                    <Box display="flex" flexDirection="column">
                                        <Typography variant="subtitle1">00 (880) 9865 562</Typography>
                                        <Typography variant="body2">Mon to Fri 9am to 6 pm</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid item container>
                                <Grid item xs={2}>
                                    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                                        <EmailIcon style={{fontSize: "2.5rem", color: "#fab700"}}/>
                                    </Box>
                                </Grid>
                                <Grid item xs={10}>
                                <Box display="flex" flexDirection="column">
                                    <Typography variant="subtitle1">support@codethemes.com</Typography>
                                    <Typography variant="body2">Send us your query anytime!</Typography>
                                </Box>
                            </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={8}> 
                        <form action="/" method="post">
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6} className={classes.contactInfoItem}>
                                    <TextField className={classes.contactInfoItemTextfield} style={{width: "100%", marginBottom: "1.5rem"}} label="Enter your name" variant="outlined" required></TextField>
                                    <TextField className={classes.contactInfoItemTextfield} style={{width: "100%", marginBottom: "1.5rem"}} label="Enter your address" variant="outlined" required></TextField>
                                    <TextField className={classes.contactInfoItemTextfield} style={{width: "100%"}} label="Enter your subject" variant="outlined" required></TextField>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextareaAutosize style={{width: "100%", padding: "1.5rem"}} rowsMin={10} placeholder="Message"></TextareaAutosize>
                                    <Box display="flex" justifyContent="flex-end"><Button className={classes.contactInfoItemButton} type="submit">Enviar</Button></Box>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Feedback