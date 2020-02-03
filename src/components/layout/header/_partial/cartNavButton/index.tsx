import React, { useState, SyntheticEvent, EventHandler } from 'react';
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
        <div className="cart-btn-block">
            <div className="cart__button" onClick={ handleClick }>
                <img className="cart_image" src="/assets/cart.svg" alt="cart"/>
                <span className="items-total">{ props.items.length }</span>
            </div>
            <CartItems show={ show } { ...props }/>
        </div>
    )
}