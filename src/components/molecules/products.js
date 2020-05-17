import React from 'react'
import { Box, Typography, Divider } from '@material-ui/core'
import { useParams, useRouteMatch } from 'react-router-dom'

const Card = ({classes, item, match, onClick}) => {
    return(
        <Box>
            <figure onClick={() => onClick(match, item.titleProduct)} className={classes.shopItemImage}>
                <img width="100%" height="100%" style={{objectFit: 'contain'}} src={item.url}  alt=""/>
            </figure>
            <Box className={classes.shopItemInfo}>
                <Typography style={{fontWeight: "lighter"}} variant="subtitle1">{item.titleProduct}</Typography> 
                <Typography style={{fontWeight: "lighter", fontSize: "0.9rem", color: "#c9ced6"}} variant="body2">{item.priceProduct}</Typography> 
            </Box>
        </Box>
    )
}

const ProductTopicItem = ({classes, product, limit, path, match, onClick}) => {
    return(
        <>
            {product.productList.map( item => {
                return(
                    path === undefined ?
                        item.id <= limit ? <Box key={item.id} className={classes.shopItem}><Card onClick={onClick} classes={classes} item={item} match={match}/></Box> : null
                    :
                    <Box key={item.id} className={classes.shopItem}>
                        <Card onClick={onClick} classes={classes} item={item} match={match}/>
                    </Box>  
                )
            })}
        </>
    )
}

export const ProductTopicWrapper = ({classes, linkProductData, onClick}) => {
    let { topicId } = useParams()
    let match = useRouteMatch()
    return(
        <>
            {linkProductData.map( product => {
                return(
                    product.productTitle === topicId ?
                    <Box key={product.id}>
                        <Typography variant="h6" style={{ marginBottom: "1rem", textTransform: "capitalize" }}>{product.productTitle}</Typography>
                        <Box className={classes.shopProductsWrapper}>
                            <ProductTopicItem onClick={onClick} match={match.url} classes={classes} product={product} path={topicId}/>
                        </Box>
                    </Box>
                    : null
                    )      
                })}
        </>
    )
}

export const ProductMenu = ({classes, linkProductData, limit, onClick}) => {
    let { topicId } = useParams()
    let match = useRouteMatch()
    
    return(
        <>
            {linkProductData.map( product => {
                console.log(product.productTitle)
                return(
                    <Box key={product.id}>
                        <Typography variant="h6" style={{ marginBottom: "1rem", textTransform: "capitalize" }}>{product.productTitle}</Typography>
                        <Box className={classes.shopProductsWrapper}>
                            <ProductTopicItem onClick={onClick} match={`${match.url}/${product.productTitle}`} classes={classes} product={product} limit={limit} path={topicId}/>
                        </Box>
                        {product.id < linkProductData.length ? <Divider className={classes.shopCardDivider}/> : null}
                    </Box>  
                )   
            })}
        </>
    )
}