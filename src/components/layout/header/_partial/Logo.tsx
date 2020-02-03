import React from 'react';
import { Link } from '../../../ui/link';
import { Title } from './styled.sc';

export const Logo: React.FC = () => (
    <Link className ="logo" to="/">
        <img src="/assets/logo.png" alt="logo"/>
        <Title className="brand-name">
            bran<span>d</span>
        </Title>
    </Link>
)