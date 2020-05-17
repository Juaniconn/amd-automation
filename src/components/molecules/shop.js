import React from 'react';
import { Link, Box, Typography, Container, makeStyles } from '@material-ui/core'
import { useRouteMatch, Switch, Route } from 'react-router-dom'
import { ProductMenu, ProductTopicWrapper } from './products'

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
    }
}));

const linkItemData1 = [
    { 
        id: 1,
        url: 'https://images-na.ssl-images-amazon.com/images/I/71K3-rYkPHL._UX466_.jpg',
        titleProduct: "title-product-a-A",
        descriptionProduct: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        priceProduct: "$100",
    },
    { 
        id: 2,
        url: 'https://images-na.ssl-images-amazon.com/images/I/71vKc2FPyrL._UX522_.jpg',
        titleProduct: "title-product-a-B",
        descriptionProduct: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        priceProduct: "$100",
    },
    { 
        id: 3,
        url: 'https://images-na.ssl-images-amazon.com/images/I/51F7E0cXmWL._UX569_.jpg',
        titleProduct: "title-product-a-C",
        descriptionProduct: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        priceProduct: "$100",
    },
    { 
        id: 4,
        url: 'https://ae01.alicdn.com/kf/HTB1l2wNdDdYBeNkSmLyq6xfnVXaE/Camisas-de-vestir-casuales-para-hombres-de-estilo-elegante-de-manga-larga-ajustada-Z020-blanco.jpg_640x640.jpg',
        titleProduct: "title-product-a-D",
        descriptionProduct: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        priceProduct: "$100",
    },
    { 
        id: 5,
        url: 'https://4.imimg.com/data4/AL/SN/MY-13188030/men-s-stylish-shirt-500x500.jpg',
        titleProduct: "title-product-a-E",
        descriptionProduct: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        priceProduct: "$100",
    },
    { 
        id: 6,
        url: 'https://5.imimg.com/data5/DK/LM/MY-8811110/men-stylish-shirt-500x500.jpg',
        titleProduct: "title-product-a-F",
        descriptionProduct: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        priceProduct: "$100",
    },
    { 
        id: 7,
        url: 'https://ae01.alicdn.com/kf/HTB1gmslg7SWBuNjSszdq6zeSpXaB/JCCHENFS-2018-hombres-camisa-de-manga-larga-para-hombre-vestido-negro-para-los-hombres-casuales-de.jpg_640x640.jpg',
        titleProduct: "title-product-a-G",
        descriptionProduct: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        priceProduct: "$100",
    },
    { 
        id: 8,
        url: 'https://5.imimg.com/data5/XJ/LT/MY-35469970/men-27s-stylish-shirt-500x500.jpg',
        titleProduct: "title-product-a-H",
        descriptionProduct: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        priceProduct: "$100",
    },
    { 
        id: 9,
        url: 'https://ae01.alicdn.com/kf/HTB11VsbLXXXXXcwXXXXq6xXFXXX6/jeansian-Spring-Autumn-Features-Shirts-Men-Casual-Jeans-Shirt-New-Arrival-Long-Sleeve-Casual-Slim-Fit.jpg',
        titleProduct: "title-product-a-I",
        descriptionProduct: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        priceProduct: "$100",
    },
    { 
        id: 10,
        url: 'https://ae01.alicdn.com/kf/HTB1gUbqLXXXXXaMXXXXq6xXFXXXO/Novedad-Informales-para-camisas-vaqueras-Hombre-de-estilo-informal-para-primavera-y-oto-o-camisas.jpg',
        titleProduct: "title-product-a-J",
        descriptionProduct: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        priceProduct: "$100",
    },
    { 
        id: 11,
        url: 'https://www.dhresource.com/0x0/f2/albu/g7/M01/BB/11/rBVaSlsTTb-AC5uFAAKYZd3s7cs634.jpg',
        titleProduct: "title-product-a-K",
        descriptionProduct: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        priceProduct: "$100",
    },
    { 
        id: 12,
        url: 'https://ae01.alicdn.com/kf/HTB1M6H.LXXXXXXuXpXXq6xXFXXX9/jeansian-Spring-Autumn-Features-Shirts-Men-Casual-Jeans-Shirt-New-Arrival-Long-Sleeve-Casual-Slim-Fit.jpg',
        titleProduct: "title-product-a-L",
        descriptionProduct: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        priceProduct: "$100",
    },
]

const linkItemData2 = [
    { 
        id: 1,
        url: 'https://cdn.shopify.com/s/files/1/0282/6678/products/mens-oct-_0081_MDV112.jpg?v=1580212293',
        titleProduct: "title-product-b-A",
        descriptionProduct: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        priceProduct: "$100",
    },
    { 
        id: 2,
        url: 'https://scene7.zumiez.com/is/image/zumiez/pdp_hero/Crysp-Denim-Basket-Woven-jeans-negros-_291197.jpg',
        titleProduct: "title-product-b-B",
        descriptionProduct: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        priceProduct: "$100",
    },
    { 
        id: 3,
        url: 'https://cdn.fashiola.mx/L528011485/newchic-elegantes-hip-hop-ripped-holes-washed-skinny-jeans-de-disenador-para-hombres.jpg',
        titleProduct: "title-product-b-C",
        descriptionProduct: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        priceProduct: "$100",
    },
    { 
        id: 4,
        url: 'https://imgaz1.chiccdn.com/thumb/large/oaupload/ser1/newchic/images/19/A4/1bbf545b-98bc-4e35-872a-3a6262e6de3e.jpeg',
        titleProduct: "title-product-b-D",
        descriptionProduct: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        priceProduct: "$100",
    },
    { 
        id: 5,
        url: 'https://scene7.zumiez.com/is/image/zumiez/pdp_hero/Crysp-Denim-Pacific-jeans-rotos-en-negro-_280370-alt1-US.jpg',
        titleProduct: "title-product-b-E",
        descriptionProduct: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        priceProduct: "$100",
    },
    { 
        id: 6,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSycwtRNBqVXOBHw6ZLlB4TfcDM-9caBBAsDyXLVqd7kFgOcWl6&usqp=CAU',
        titleProduct: "title-product-b-F",
        descriptionProduct: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        priceProduct: "$100",
    },
    { 
        id: 7,
        url: 'https://scene7.zumiez.com/is/image/zumiez/pdp_hero/Crysp-Denim-Pacific-jeans-rotos-lavado-piedra-_280367.jpg',
        titleProduct: "title-product-b-G",
        descriptionProduct: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        priceProduct: "$100",
    },
    { 
        id: 8,
        url: 'https://scene7.zumiez.com/is/image/zumiez/pdp_hero/Crysp-Denim-Pacific-jeans-rotos-en-negro-_280370-alt2-US.jpg',
        titleProduct: "title-product-b-H",
        descriptionProduct: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        priceProduct: "$100",
    },
    { 
        id: 9,
        url: 'https://scene7.zumiez.com/is/image/zumiez/pdp_hero/Crysp-Denim-Pacific-Splatter-Black-Ripped-Jeans-_288420-alt2-US.jpg',
        titleProduct: "title-product-b-I",
        descriptionProduct: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        priceProduct: "$100",
    },
    { 
        id: 10,
        url: 'https://scene7.zumiez.com/is/image/zumiez/pdp_hero/Rustic-Dime-Knee-Seam-pantalones-rotos-en-negro-_276553.jpg',
        titleProduct: "title-product-b-J",
        descriptionProduct: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        priceProduct: "$100",
    },
    { 
        id: 11,
        url: 'https://scene7.zumiez.com/is/image/zumiez/pdp_hero/Freeworld-Messenger-jeans-skinny-en-negro--_261880-back.jpg',
        titleProduct: "title-product-b-K",
        descriptionProduct: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        priceProduct: "$100",
    },
    { 
        id: 12,
        url: 'https://ae01.alicdn.com/kf/HTB1uVn3XZfrK1RkSmLyq6xGApXaa/Hip-hop-hombres-pantalones-hombre-kpop-casual-de-carga-pantalones-Pantal-n-skinny-modis-streetwear-pantalones.jpg',
        titleProduct: "title-product-b-L",
        descriptionProduct: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        priceProduct: "$100",
    },
]

const linkProductData = [
    {
        id: 1,
        productTitle: "camisas",
        productList: linkItemData1,
    },
    {
        id: 2,
        productTitle: "pantalones",
        productList: linkItemData2,
    },
]


const Shop = (props) => {
    const classes = useStyles()
    let match = useRouteMatch()

    // console.log(match)

    return(
        <Box className={classes.shop}>
            <Container fixed>
                <Box className={classes.shopWrapper}>
                    <Box>
                        <Switch>
                            { match.isExact ? <ProductMenu onClick={props.onClick} classes={classes} linkProductData={linkProductData} limit={4} /> : <Route exact path={`${match.path}/:topicId`}><ProductTopicWrapper onClick={props.onClick} classes={classes} linkProductData={linkProductData} /></Route> }
                        </Switch>
                    </Box>
                    <Box className={classes.shopSettingsWrapper}>
                        <Box className={classes.shopSettingsItem}>
                            <Typography variant="subtitle1">Categories</Typography>
                            <Box>
                                <ul className={classes.shopSettingsItemListWrapper}>
                                    { linkProductData.map(item => {
                                        return(
                                            <li key={item.id}><Link className={classes.shopSettingsItemListItem} onClick={() => props.onClick(match.url, `${item.productTitle}`)}><Typography variant="body2" style={{textTransform: "capitalize"}}>{item.productTitle}</Typography></Link></li>
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

export default Shop