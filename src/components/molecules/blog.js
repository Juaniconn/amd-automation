import React from 'react';
import { Box, Typography, Container, makeStyles } from '@material-ui/core'

import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const linkItemData = [
    { 
        id: 1,
        avatar: <AccountBoxIcon></AccountBoxIcon>,
        author: 'Mark Wiens',
        datePublished: '13th Dec',
        totalLikes: '15',
        totalComments: '04',
        blogTitle: 'Portable fashion for young women',
        blogDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea.',
        url: 'https://images.pexels.com/photos/135020/pexels-photo-135020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    { 
        id: 2,
        avatar: <AccountBoxIcon></AccountBoxIcon>,
        author: 'Mark Wiens',
        datePublished: '13th Dec',
        totalLikes: '15',
        totalComments: '04',
        blogTitle: 'Portable fashion for young women',
        blogDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea.',
        url: 'https://images.pexels.com/photos/3787300/pexels-photo-3787300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    { 
        id: 3,
        avatar: <AccountBoxIcon></AccountBoxIcon>,
        author: 'Mark Wiens',
        datePublished: '13th Dec',
        totalLikes: '15',
        totalComments: '04',
        blogTitle: 'Portable fashion for young women',
        blogDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea.',
        url: 'https://images.pexels.com/photos/3815573/pexels-photo-3815573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
]

const useStyles = makeStyles((theme) => ({
    blog: {
        padding: "5rem 0",
        backgroundColor: "white",
    },
    blogWrapper: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
        gap: "2rem",
    },
    blogItem: {
    },
    blogItemTitle: {
        margin: "0.5rem 0",
        color: "#222222",
    },
    blogItemSubtitle: {
        margin: "0.5rem 0",
        color: "#777",
    },
    blogItemBody: {
        margin: "0.5rem 0",
        color: "#777",
        fontWeight: "lighter",
    },
    blogItemFigure: {
        width: "100%",
        height: "20rem", 
        [theme.breakpoints.down('sm')]: {
            height:"15rem",
        },  
        margin: "0",     
    },
    blogItemContentWrapper: {
        [theme.breakpoints.down('xs')]: {
            textAlign: "center",
        },
    },
}));


const Blog = () => {
    const classes = useStyles();
    return(
        <Box className={classes.blog}>
            <Container fixed>
                <Box display="flex" flexDirection="column" alignItems="center" margin="0 0 2.5rem" textAlign="center">
                    <Typography className={classes.blogItemTitle} variant="h3">Latest Posts From Our Blog</Typography>
                    <Typography className={classes.blogItemSubtitle} variant="subtitle1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                </Box>
                <Box className={classes.blogWrapper}>
                    {linkItemData.map( item => {
                        return(
                            <Box key={item.id}>
                                <figure className={classes.blogItemFigure}>
                                    <img width="100%" height="100%" style={{objectFit: 'cover'}} src={item.url}  alt=""/>
                                </figure>
                                <Box display="flex" justifyContent="space-between" alignItems="center" height="3rem">
                                    <Box display="flex" alignItems="center">
                                        {item.avatar} 
                                        <Typography variant="subtitle1" style={{marginLeft: "0.15rem"}}>{item.author}</Typography>
                                    </Box>
                                    <Box display="flex" alignItems="center">
                                        <Typography variant="caption">{item.datePublished}</Typography>
                                        <Typography variant="caption" style={{display: "flex", alignItems: "center", marginLeft: "0.3rem"}}><FavoriteBorderOutlinedIcon fontSize="small" style={{marginRight: "0.15rem"}}></FavoriteBorderOutlinedIcon>{item.totalLikes}</Typography>
                                        <Typography variant="caption" style={{display: "flex", alignItems: "center", marginLeft: "0.3rem"}}><CommentOutlinedIcon fontSize="small" style={{marginRight: "0.15rem"}}></CommentOutlinedIcon>{item.totalComments}</Typography>
                                    </Box>
                                </Box>
                                <Box className={classes.blogItemContentWrapper}>
                                    <Typography className={classes.blogItemTitle} variant="h6">{item.blogTitle}</Typography>
                                    <Typography className={classes.blogItemBody} variant="body1">{item.blogDescription}</Typography>
                                </Box>
                            </Box>
                        )
                    })}
                </Box>
            </Container>
        </Box>
    )
}

export default Blog