import styled from "styled-components";

export const StyledDropDown = styled.button`
    outline: unset;
    cursor: pointer;
    border: 1px solid #e6e6e6;
    background-color: #f5f5f5;
    position: relative;
    display: block;
    border-right: 1px solid #ddd;
    padding: 11px 23px 11px 15px;
    font-size: 14px;
    border-radius: 3px 0 0 3px;
    font-weight: 500;
    letter-spacing: 0.35px;
    transition: 0.5s;
    border-radius: 4px;

    &:hover {
        background-image: linear-gradient(to bottom,#bfbebe 0%,#c1bebe 100%);
        color: #fff;
    }
    &:hover:after {
        border-top-color: #ffffff;
    }

    &:after {
        content: "";
        border: 4px solid transparent;
        border-top: 4px solid #a4a4a4;
        position: absolute;
        top: 18px;
        margin-left: 8px;
        color: #838383;
        transition: 1s;
    }
`;