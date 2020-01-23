import React from 'react';
import { StyledDropDown } from './styled.sc';
import styled from 'styled-components';

interface IDropDown {
    title: string,
    options: Array<{ id: number, label: string }> | [],
}


export const DropDown: React.FC<IDropDown> = ( props: IDropDown ) => {
    const { options, title } = props;

    return (
        <div>
            <StyledDropDown>{ title }</StyledDropDown>  

        {/* <nav className="browse-items hide">
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
        </nav> */}
        
    </div>
    )
}