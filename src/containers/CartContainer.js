import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import * as message from '../contants/Message';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import { actRemoveProductInCart, actChangeMessage, actUpdateProductInCart } from '../actions/index';

class CartContainer extends Component {
    render() {
        var {cart, onDeleteProductInCart, onChangeMessage, onUpdateProductInCart} = this.props; 

        var showCartItem = (cart) =>{
            var result = <tr>
                <td>{message.MSG_CART_EMPTY}</td>
            </tr>
            if (cart.length > 0){
                result = cart.map((item, index)=>{
                    return(
                        <CartItem 
                            key = {index}
                            item = {item}
                            index = {index}
                            onDeleteProductInCart = {onDeleteProductInCart}
                            onChangeMessage = {onChangeMessage}
                            onUpdateProductInCart = {onUpdateProductInCart}
                        />
                    );
                })
            }
            return result;
        }
        return (
            <Cart>
                { showCartItem(cart) }
                { this.showTotalCost(cart) }
            </Cart>
        );
    }

    showTotalCost = (cart) =>{
        var result = null;
        if(cart.length > 0){
            result = <CartResult cart = {cart}/>
        }
        return result
    }

    
}

CartContainer.propTypes = {
    cart : PropTypes.arrayOf(
        PropTypes.shape({
            products: PropTypes.shape({
                id : PropTypes.number.isRequired,
                name : PropTypes.string.isRequired,
                image : PropTypes.string.isRequired,
                price : PropTypes.number.isRequired,
                rating : PropTypes.number.isRequired,
                inventory : PropTypes.number.isRequired
            }),
            quantity: PropTypes.number.isRequired
        })
        
    ).isRequired,
    onDeleteProductInCart: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onUpdateProductInCart: PropTypes.func.isRequired,
}

const mapStateToProps = (state) =>{
    return {
        cart: state.cart,
    }
}

const mapDispatchToProps = (dispatch, props) =>{
    return{
        onDeleteProductInCart: (product)=>{
            dispatch(actRemoveProductInCart(product))
        },
        onChangeMessage: (message)=>{
            dispatch(actChangeMessage(message))
        },
        onUpdateProductInCart: (product, quantity)=>{
            dispatch(actUpdateProductInCart(product, quantity))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);