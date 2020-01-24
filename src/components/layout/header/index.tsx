import React from 'react';
import { Logo } from './_partial/Logo';
import styled from 'styled-components';
import { DropDown } from '../../ui';

const HtmlHeader = styled.header`
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.17);
    background-color: #ffffff;
    padding: 30px 0;
    border: 1px solid #ececec;
`;

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
`
function getUrlForCategory( category: string, type?: string, url?: string ): string {
    const baseUrl = url ? url : '/products';
    const categoryType = type ? `&type=${ type }`: '';
    return `${ baseUrl }?category${ category }${ categoryType }`;
}

const dropDownCategories = [
    { id: 1, name: 'Woman', href: getUrlForCategory('woman'), subCategories: [
        { id: 1, name: 'Dresses', href: getUrlForCategory('woman', 'dresses') },
        { id: 2, name: 'Tops', href: getUrlForCategory('woman', 'type-tops') },
        { id: 3, name: 'Sweaters/Knits', href: getUrlForCategory('woman', 'sweaters-knits') },
        { id: 4, name: 'Jackets/Coats', href: getUrlForCategory('woman', 'jackets-coats') },
        { id: 5, name: 'Blazers', href: getUrlForCategory('woman', 'blazers') },
        { id: 6, name: 'Denim', href: getUrlForCategory('woman', 'denim') },
        { id: 7, name: 'Leggings/Pants', href: getUrlForCategory('woman', 'leggings-pants') },
        { id: 8, name: 'Skirts/Shorts', href: getUrlForCategory('woman', 'skirts-shorts') },
        { id: 9, name: 'Accessories', href: getUrlForCategory('woman', 'accessories') },
    ]},

    { id: 2, name: 'Man', href: getUrlForCategory('man'), subCategories: [
        { id: 1, name: 'Tees/Tank tops', href: getUrlForCategory('man', 'tees-tank_tops') },
        { id: 2, name: 'Shirts/Polos', href: getUrlForCategory('man', 'shirts-polos') },
        { id: 3, name: 'Sweaters', href: getUrlForCategory('man', 'sweaters') },
        { id: 4, name: 'Sweatshirts/Hoodies', href: getUrlForCategory('man', 'sweatshirts-hoodies') },
        { id: 5, name: 'Blazers', href: getUrlForCategory('man', 'blazers') },
        { id: 5, name: 'Jackets/vests', href: getUrlForCategory('man', 'jackets-vests') },
    ]},
];

export const Header: React.FC = () => {
    return (
        <HtmlHeader>

        <div className="container header-flex">
            <HeaderLeft className="header-left">
                <Logo/>

                <div>
                    <DropDown options={ dropDownCategories } title={'Browse'}/>
                </div>
                <form className="header-form" action="#">
                    <div className="select" >

                        {/* <input type="text" className="search-text" placeholder="Search for Item..."/> 
                        <a href="product.html" className="find-btn search-button"><i className="fas fa-search"></i></a> */}
                    </div>
                </form>
            </HeaderLeft>
            <div className="header-right">
                <div className="cart-btn-block">
                    <a className="cart__button" href="cart.html">
                        <img className="cart-image" src="images/cart.svg" alt="cart"/>
                        <span className="cart-items-total">0</span>
                    </a>
                    <div className="cart-items">
                        <div className="cart__container top-block">
                            {/* <!-- rendering cart goods from js --> */}
                        </div>
                        <div className="bottom-block">
                        <div className="cart-total-price">
                            <div className="cart-total__text"> TOTAL </div>
                            <div className="cart-total__price"></div>
                        </div>
                            <a href="checkout.html" className="cart-btn btn-check-out">Checkout</a>
                            <a href="cart.html" className="cart-btn btn-to-cart">Go to cart</a>
                        </div>
                    </div>
                 </div>
                <div className="account__control">
                    <a href="#" className="my-account-btn">Login</a>
                    <i className="fas fa-sign-out-alt btn-logout hide"></i>
                </div>
            </div>
        </div>
    </HtmlHeader>
    )
}