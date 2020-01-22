import React from 'react';
import { Logo } from './_partial/Logo';

export const Header: React.FC = () => {
    return (
        <header>

        <div className="container header-flex">

            <div className="header-left">

                <Logo/>
                {/* <a className ="logo" href="index.html">
                    <img src="images/logo.png" alt="logo"/>
                    <div className="brand-name">bran<span>d</span></div>
                </a> */}
                <form className="header-form" action="#">
                    <div className="select" >
                        <div className="browse-container">
                            <a href="product.html" className="browse"> <span>Browse</span></a>
                            <nav className="browse-items hide">
                                <div className="browse-menu">
                                    <h3><a href="product.html">Women</a></h3>
                                    <ul>
                                        <li className="browse-menu-li"><a href="product.html">Dresses</a></li>
                                        <li className="browse-menu-li"><a href="product.html">Tops</a></li>
                                        <li className="browse-menu-li"><a href="product.html">Sweaters/Knits</a></li>
                                        <li className="browse-menu-li"><a href="product.html">Jackets/Coats</a></li>
                                        <li className="browse-menu-li"><a href="product.html">Blazers</a></li>
                                        <li className="browse-menu-li"><a href="product.html">Denim</a></li>
                                        <li className="browse-menu-li"><a href="product.html">Leggings/Pants</a></li>
                                        <li className="browse-menu-li"><a href="product.html">Skirts/Shorts</a></li>
                                        <li className="browse-menu-li"><a href="product.html">Accessories</a></li>
                                    </ul>
                                </div>
                                <div className="browse-menu">
                                    <h3><a href="product.html">Man</a></h3>
                                    <ul>
                                        <li className="browse-menu-li"><a href="product.html">Tees/Tank tops</a></li>
                                        <li className="browse-menu-li"><a href="product.html">Shirts/Polos</a></li>
                                        <li className="browse-menu-li"><a href="product.html">Sweaters</a></li>
                                        <li className="browse-menu-li"><a href="product.html">Sweatshirts/Hoodies</a></li>
                                        <li className="browse-menu-li"><a href="product.html">Blazers</a></li>
                                        <li className="browse-menu-li"><a href="product.html">Jackets/vests</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <input type="text" className="search-text" placeholder="Search for Item..."/> 
                        <a href="product.html" className="find-btn search-button"><i className="fas fa-search"></i></a>
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
    </header>
    )
}