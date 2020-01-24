import styled from "styled-components";
import { Link as RouterLink } from 'react-router-dom';

export default {
    Container: styled.div`
        position: relative;
    `,
    Button: styled.button`
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
    `,
    Nav: styled.nav`
        z-index: 1;
        background-color: #ffffff;
        width: 262px;
        border-radius: 5px;
        box-shadow: 1px -1px 5px 0 rgba(0, 0, 0, 0.16);
        position: absolute;
        top: 100%;
        padding-bottom: 20px;
    `,
    H3: styled.h3`
        border-bottom: solid 1px #ddd;
        width: 85%;
        margin-left: 13px;
        padding-bottom: 10px;
        padding-top: 19px;
        color: #232323;
        font-size: 14px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.35px;
    `,
    Link: styled( RouterLink )`
        text-decoration: none;
        color: #222222
    `,

    Ul: styled.ul`
        margin-top: 2px;
        list-style-type: none;
        color: #a4a4a41c;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0.35px;
    `,

    Li: styled.li`
        cursor: pointer;
        list-style-type: none;
        color: #a4a4a41c;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0.35px;
        line-height: 28px;
        margin-left: 13px;
        width: 85%;
        color: #222222;

        &:hover {
            background-color: #a4a4a41c;
            color: #f16d7f;
        }

        a {
            color: inherit;
        }
    `,
}