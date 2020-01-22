import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Link = styled( RouterLink )`
    display: flex;
    position: relative;
    align-items: center;
`;

export const Title = styled.div`
    text-transform: uppercase;
    font-size: 27px;
    font-weight: 300;
    margin-top: 10px;
    margin-left: 13px;

    span {
        color: #f16d7f;
        font-weight: 700;
    }
`;