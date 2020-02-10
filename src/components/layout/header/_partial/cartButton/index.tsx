import { Cart } from './style';
import { CartItems } from './CartItems';
import React, { useState, SyntheticEvent, EventHandler } from 'react';

export interface ICartButton {
    userId?: number,
    items: Array<object>,
    onCheckout: () => void,
}

export const CartButton: React.FC<ICartButton> = (props: ICartButton ): JSX.Element => {
    const [ show, toggle ] = useState( false );
    const handleClick: EventHandler<SyntheticEvent> = (): void => toggle( !show );

    return (
        <Cart.Container className="cart__button" onClick={ handleClick }>
            <Cart.Img className="cart_image" src="/assets/cart.svg" alt="cart"/>
            <Cart.Count className="items_total">{ props.items.length }</Cart.Count>
            <CartItems show={ show } { ...props }/>
        </Cart.Container>
    );
}