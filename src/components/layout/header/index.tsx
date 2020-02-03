import React from 'react';
import { dropDownCategories } from './data';
import { DropDown, SearchInput } from '../../ui';
import { Logo, CartNavButton, AccountControl } from './_partial';
import { Style } from './style';

export const Header: React.FC = () => {
    return (
        <Style.HtmlHeader className="html__header">
            <Style.Container className="header__container">
                <Style.HeaderLeft className="header-left">
                    <Logo/>
                    <Style.FlexContainer>
                        <DropDown options={ dropDownCategories } title={'Browse'}/>
                        <SearchInput placeholder={ 'placeholder' } onClick={ console.log }/>
                    </Style.FlexContainer>
                </Style.HeaderLeft>
                <Style.HeaderRight className="header-right">
                    <CartNavButton items={ [] } onCheckout={ () => console.log('%c checkout', 'color: red') }/>
                    <AccountControl/>
                </Style.HeaderRight>
            </Style.Container>
        </Style.HtmlHeader>
    )
}