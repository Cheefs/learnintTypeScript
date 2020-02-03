import React from 'react';
import { Container, Input, SearchButton, Icon } from './style';

interface ISearch {
    onClick: () => void,
    placeholder?: string,
}

export const SearchInput: React.FC<ISearch> = ( props: ISearch ): JSX.Element => {
    const { placeholder, onClick } = props;
    return (
        <Container className={ 'search__block' }>
            <Input className={ 'search__input' } placeholder={ placeholder || '' } />
            <SearchButton to="/products" className="search__button">
                <Icon onClick={ onClick } className="fas fa-search"/>
            </SearchButton>   
        </Container>
    )
}