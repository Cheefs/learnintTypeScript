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



export const Header: React.FC = () => {
    return (
        <HtmlHeader>

        <div className="container header-flex">
            <div className="header-left">
                <Logo/>

                <div>
                    <DropDown options={ [] } title={'Browse'}/>
                </div>
                <form className="header-form" action="#">
                    <div className="select" >

                        {/* <input type="text" className="search-text" placeholder="Search for Item..."/> 
                        <a href="product.html" className="find-btn search-button"><i className="fas fa-search"></i></a> */}
                    </div>
                </form>
            </div>
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