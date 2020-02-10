import React from 'react';
import { ItemsStyle } from './style';

export interface ICartNavContent {
    show: boolean,
    items: Array<object>,
    onCheckout: () => void,
    userId?: number,
    totalPrice?: number
}

type Items = JSX.Element | null;


export const CartItems: React.FC<ICartNavContent> = ( props: ICartNavContent ): Items => {
    const { show, items, totalPrice, onCheckout, userId } = props;

    if ( !show ) {
        return null;
    }

    return (
        <ItemsStyle.Container className="cart__items">
            <ItemsStyle.TopBlock className="items_top">
                {/* <!-- rendering cart goods from js --> */} 
            </ItemsStyle.TopBlock>
            <ItemsStyle.BottomBlock className="items_bottom">
                <ItemsStyle.ItemsPrice className="items_price">
                    <div className="price_label">TOTAL</div>
                    <div className="price_value">{ totalPrice || 0 }</div>
                </ItemsStyle.ItemsPrice>
                <ItemsStyle.Link to={ '/checkout' } className="to_checkout">Checkout</ItemsStyle.Link>
                <ItemsStyle.Link to={ `/cart?userId=${ userId || null }` } className="to_cart">Go to cart</ItemsStyle.Link>
            </ItemsStyle.BottomBlock>
        </ItemsStyle.Container>
    )
} 