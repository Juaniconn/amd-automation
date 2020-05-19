import React, { useContext } from 'react'
import { Box, Typography, Divider, Button } from '@material-ui/core'
import { useParams, useRouteMatch } from 'react-router-dom'

import { ShopContext } from './../context/shopContext'

const Card = ({classes, item, match, onClick, topicId, productId}) => {
    const { addItemToCheckout } = useContext(ShopContext)
    return(
        <Box className={productId !== undefined ? classes.shopCardItem : null}>
            <figure onClick={() => onClick(match, productId === undefined ? `/${item.titleProduct}` : ``)} className={classes.shopItemImage}>
                <img width="100%" height="100%" style={{objectFit: 'contain'}} src={item.url[0]}  alt=""/>
            </figure>
            <Box className={classes.shopItemInfo}>
                <Typography className={productId !== undefined ? classes.shopItemInfoTypography : null} style={{fontWeight: "lighter", fontSize: `${productId !== undefined ? '1.4rem' : '1rem'}`, textTransform: "capitalize"}} variant="subtitle1">{item.titleProduct}</Typography> 
                <Typography className={productId !== undefined ? classes.shopItemInfoTypography : null} style={{fontWeight: "lighter",fontSize: `${productId !== undefined ? '1rem' : '0.9rem'}`, color: "#c9ced6"}} variant="body2">{item.priceProduct}</Typography> 
                {productId !== undefined ? <Typography className={classes.shopItemInfoTypography} style={{fontWeight: "lighter", fontSize: "0.8rem"}} variant="body1">{item.descriptionProduct}</Typography> : null}
                {productId !== undefined ? <Button className={classes.shopItemInfoButton} onClick={() => addItemToCheckout(item.variantId[0], 1)} variant="contained">Add To Cart</Button> : null}
            </Box>
        </Box>
    )
}

const ProductTopic = ({classes, product, limit, topicId, productId, match, onClick}) => {
    const CardItem = ({classes, topicId, productId, match, onClick, item}) => <Box className={classes.shopItem}><Card productId={productId} topicId={topicId} onClick={onClick} classes={classes} item={item} match={match}/></Box>
    return(
        <>
            {
            topicId === undefined ?
                product.productList.map( item => {
                    return(item.id <= limit ? <CardItem key={item.id} className={classes.shopItem} productId={productId} topicId={topicId} onClick={onClick} classes={classes} item={item} match={match} /> : null)
                })
            :
            topicId === product.productTitle.toLowerCase().replace(/\s/g, '') ?
                product.productList.map( item => {
                    return(
                        match === `/tienda/${topicId}` ? <CardItem key={item.id} className={classes.shopItem} productId={productId} topicId={topicId} onClick={onClick} classes={classes} item={item} match={match} /> : item.titleProduct === productId ? <CardItem key={item.id} className={classes.shopItem} productId={productId} topicId={topicId} onClick={onClick} classes={classes} item={item} match={match} /> : null
                    )
                })
            : null    
            }
        </>
    )
}

export const ProductMenu = ({classes, linkProductData, limit, onClick}) => {
    let { topicId, productId } = useParams()
    let match = useRouteMatch()
    return(
        <>
            {linkProductData.map( product => {
                return(
                    <Box key={product.id}>
                        {topicId === undefined ? <Typography variant="h6" style={{ marginBottom: "1rem", textTransform: "capitalize" }}>{product.productTitle}</Typography> : topicId === product.productTitle.toLowerCase().replace(/\s/g, '') ? <Typography variant="h6" style={{ marginBottom: "1rem", textTransform: "capitalize" }}>{product.productTitle}</Typography> : null}
                        
                        <Box className={classes.shopProductsWrapper}>
                            <ProductTopic onClick={onClick} match={topicId === undefined ? `${match.url}/${product.productTitle.toLowerCase().replace(/\s/g, '')}` : `${match.url}`} classes={classes} product={product} limit={limit} topicId={topicId} productId={productId}/>
                        </Box>
                        {topicId !== undefined ? null : product.id < linkProductData.length ? <Divider className={classes.shopCardDivider}/> : null}
                    </Box>  
                )   
            })}
        </>
    )
}