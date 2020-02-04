import styled from "styled-components";
import { Link as RouterLink } from 'react-router-dom';

export const Cart = {
    Container: styled.div`
        position: relative;
    `,
    Count: styled.div`
        position: absolute;
        width: 18px;
        display: block;
        height: 18px;
        background-color: #f16d7f;
        color: #ffffff;
        font-size: 12px;
        font-weight: 700;
        line-height: 18px;
        text-align: center;
        border-radius: 50%;
        top: -7px;
        left: 23px;
        letter-spacing: 0.3px;
        animation: cart-count 3s infinite;

        @keyframes cart-count {
        0% {  background-color: transparent; }
        30% { background-color: #f16d7f; }
        60% { background-color: #e3455afc; }
        100% { background-color: transparent; }
        }
    `
};

export const ItemsStyle = {
    Container: styled.div`
        position: absolute;
        width: 280px;
        border-radius: 5px;
        background-color: #ffffff;
        left: -59px;
        border: solid 1px #ddd;
        top: 40px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08);
        z-index: 10;

        &:before {
            border-top: 1px solid #ddd;
            border-left: 1px solid #ddd;
            background-color: #ffffff;
            transform: rotate(45deg);
            left: 72px;
            top: -5px;

            width: 7px;
            height: 7px;
            position: absolute;
            content: "";
        }
    `,
    TopBlock: styled.div`
        margin: 21px 15px;
        overflow: auto;
        height: 240px;
        max-height: 500px;
    `,
    BottomBlock: styled.div`
        padding: 0 17px 13px;
    `,
    ItemsPrice: styled.div`
        display: flex;
        justify-content: space-between;
        color: #222222;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 32px;

        .price_label {
            padding: 0 10px;
        }
    `,
    Link: styled(RouterLink)`
        display: block;
        text-decoration: none;

        padding: 16px;
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        background-color: #ffffff;
        transition: 0.4s; 


        border: 1px solid #f16d7f;
        color: #f16d7f;

        text-align: center;

        &:hover {
            background-color: #f16d7f;
            color: white;
        }
        &:last-of-type {
            color: #4a4a4a;
            margin-top: 11px;
            border: 1px solid #eaeaea;
            &:hover {
                background-color: #bebebf;
            }
        }
    `
}