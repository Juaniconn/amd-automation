import React, { useContext, useEffect } from 'react';
import { Link, Box, Typography, Container, makeStyles } from '@material-ui/core'
import { useRouteMatch, Switch, Route } from 'react-router-dom'
import { ProductMenu } from './products'
import { ShopContext } from './../context/shopContext'

const useStyles = makeStyles((theme) => ({
    shop: {
        padding: "5rem 0",
        backgroundColor: "white",
    },
    shopWrapper: {
        display: "grid",
        gridTemplateColumns: "1fr 15rem",
        gap: "2rem",
        gridTemplateAreas: "'shop-products shop-settings'",
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: "1fr",
            gridTemplateAreas: "'shop-settings''shop-products'",
        },
    },
    shopProductsWrapper: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(10rem, 1fr))",
        gap: "4rem",
        gridArea: "shop-products",
        [theme.breakpoints.down('xs')]: {
            gridTemplateColumns: "1fr",
        },
    },
    shopSettingsWrapper: {
        gridArea: "shop-settings",
    },
    shopSettingsItem: {
        border: ".1rem solid #dee2e6",
        borderRadius: "0.25rem",
        padding: "1rem",
    },
    shopSettingsItemListWrapper: {
        listStyle: "none",
        padding: "0",
        margin: "0.5rem 0 0",
    },
    shopSettingsItemListItem: {
        textDecoration: 'none', 
        cursor: 'pointer', 
        color: "#318DD2",
        display: "block",
        width: "fit-content",
    },
    shopItemInfo: {
        padding: "1rem 0 0",
    },
    shopItemInfoTypography: {
        marginBottom: "1rem",
    },
    shopItemInfoButton: {
        color: "white",
        backgroundColor: "#fab700",
        [theme.breakpoints.down('xs')]: {
            width: "100%",
        },
        "&:hover": {
            backgroundColor: "#C08000",
        }
    },
    shopItemTitle: {
        margin: "0.5rem 0",
        color: "#222222",
    },
    shopItemSubTitle: {
        margin: "0.5rem 0",
        color: "#777",
    },
    shopItemImage: {
        width: "100%",
        height: "20rem",
        objectFit: "cover",
        margin: "0",
        position: "relative",
        cursor: "pointer",
        "&::before": {
            backgroundColor: "rgba(0,0,0,0.1)",
            position: "absolute",
            content: "''",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            transition: "450ms all",
            zIndex: "1",
        },
        "&::after": {
            position: "absolute",
            content: "''",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            transition: "450ms all",
            zIndex: "1",
        },
        "&:hover:before": {
            boxShadow: ".1rem .2rem 1rem 0 rgba(0,0,0,0.25)",
        },
        "&:hover:after": {
            backgroundColor: "rgba(255,255,255,0.1)",
        },
    },
    shopCardDivider: {
        margin: "2rem 0"
    },
    shopCardItem: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridGap:"2rem",
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: "1fr",
        },
    },
}));

const Shop = (props) => {
    const classes = useStyles()
    let match = useRouteMatch()

    const { fetchAllCollections, collections } = useContext(ShopContext)

    useEffect(() => {
        fetchAllCollections()
        return () => {

        }
    }, [fetchAllCollections])
    
    const linkProductData = []

    const fetchAllCollectionsProducts = () => {
        let collectionsCount = 1
        collections.map(collection => {
            let productsCount = 0
            return(
                <>
                    {linkProductData.push({id: collectionsCount, productTitle: collection.title, productList: collection.products.map(product => {
                        productsCount++
                        return(
                            {id: productsCount, variantId: product.variants.map(variants => variants.id), url: product.images.map(images => images.src), titleProduct: product.title, descriptionProduct: product.description, priceProduct: `$${product.variants.map(variants => variants.price)}`}
                        )
                    })})}
                    {collectionsCount++}
                </>   
            )
        })
    }

    fetchAllCollectionsProducts()

    if(!collections){
        console.log('Loading') 
    } else{
        return(
            <Box className={classes.shop}>
                <Container fixed>
                    <Box className={classes.shopWrapper}>
                        <Box>
                            <Switch> 
                                <Route exact path={`${match.path}`}><ProductMenu onClick={props.onClick} classes={classes} linkProductData={linkProductData} limit={4} /></Route>
                                <Route exact path={`${match.path}/:topicId`}><ProductMenu onClick={props.onClick} classes={classes} linkProductData={linkProductData} /></Route>
                                <Route path={`${match.path}/:topicId/:productId`}><ProductMenu onClick={props.onClick} classes={classes} linkProductData={linkProductData} /></Route>
                            </Switch>
                        </Box>
                        <Box className={classes.shopSettingsWrapper}>
                            <Box className={classes.shopSettingsItem}>
                                <Typography variant="subtitle1">Categories</Typography>
                                <Box>
                                    <ul className={classes.shopSettingsItemListWrapper}>
                                        { linkProductData.map(item => {
                                            return(
                                                <li key={item.id}><Link className={classes.shopSettingsItemListItem} onClick={() => props.onClick(match.url, `/${item.productTitle}`)}><Typography variant="body2" style={{textTransform: "capitalize"}}>{item.productTitle}</Typography></Link></li>
                                            )
                                        }) }
                                    </ul>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        )
    }
}

export default Shop