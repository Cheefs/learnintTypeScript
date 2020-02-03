import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Input = styled.input`
    width: 259px;
    height: 100%;
    border: 1px solid #e6e6e6;
    background-color: #ffffff;
    padding: 0 15px;
    color: #a4a4a4;
    border-left: none;
`;

export const SearchButton = styled( Link )`
    display: flex;
    height: 100%;
    border-radius: 0 3px 3px 0;
    background-color: #ffffff;
    color: #a4a4a4;
    font-size: 14px;
    font-weight: 400;
    transition: 0.5s;
    align-items: center;
    text-decoration: unset;

    &:hover {
        color: #ffffff;
        background-color: #bfbebe;
    }
`;

export const Container = styled.div`
    display: flex;
    height: 2.3em;
    align-items: center;
`;

export const Icon = styled.i`
    height: 100%;
    padding: 0 10px;
    display: flex;
    border: 1px solid #ddd;
    border-left: transparent;
    align-items: center;
    border-radius: 0 3px 3px 0;
`