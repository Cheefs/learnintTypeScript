import React from 'react';
import { Link } from '../../../../ui/link';

export interface ICartNavContent {
    show: boolean,
    items: Array<object>,
    onCheckout: () => void,
    userId?: number,
}

type Items = JSX.Element | null;

export const CartItems: React.FC<ICartNavContent> = ( props: ICartNavContent ): Items => {
    const { show, items, onCheckout, userId } = props;

    if ( !show ) {
        return null;
    }

    return (
        <div className="cart-items">
            <div className="cart__container top-block">
                {/* <!-- rendering cart goods from js --> */}
            </div>
            <div className="bottom-block">
            <div className="cart-total-price">
                <div className="cart-total__text"> TOTAL </div>
                <div className="cart-total__price"></div>
            </div>
                <a onClick={ onCheckout } className="cart-btn btn-check-out">Checkout</a>
                <Link to={ `/cart?userId=${ userId || null }` } className="cart-btn btn-to-cart">Go to cart</Link>
            </div>
        </div>
    )
} 