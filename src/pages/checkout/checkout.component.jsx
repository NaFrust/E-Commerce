import React from 'react';
import './checkout.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage = ({cartItems,total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Producto</span>
            </div>
            <div className="header-block">
                <span>Descripcion</span>
            </div>
            <div className="header-block">
                <span>Cantidad</span>
            </div>
            <div className="header-block">
                <span>Precio</span>
            </div>
            <div className="header-block">
                <span>Quitar</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => 
                (<CheckoutItem key={cartItem.id} cartItem={cartItem}/>))
        }
        <div className="total">
            <span>TOTAL ${total}</span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})


export default connect(mapStateToProps)(CheckoutPage);