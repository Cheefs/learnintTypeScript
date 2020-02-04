import React, { useState, SyntheticEvent, EventHandler } from 'react';
import { Cart } from './style';
import { CartItems } from './CartItems';

export interface ICartNavButton {
    userId?: number,
    items: Array<object>,
    onCheckout: () => void,
}

export const CartNavButton: React.FC<ICartNavButton> = (props: ICartNavButton ): JSX.Element => {
    const [ show, toggle ] = useState( false );
    const handleClick: EventHandler<SyntheticEvent> = (): void => toggle( !show );

    return (
        <Cart.Container className="cart__button" onClick={ handleClick }>
            <img className="cart_image" src="/assets/cart.svg" alt="cart"/>
            <Cart.Count className="items-total">{ props.items.length }</Cart.Count>
            <CartItems show={ show } { ...props }/>
        </Cart.Container>
    );
}