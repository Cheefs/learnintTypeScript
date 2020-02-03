import React from 'react';

export const AccountControl: React.FC = (props: object ): JSX.Element => {
    return (
        <div className="account__control">
            <a href="#" className="my-account-btn">Login</a>
            <i className="fas fa-sign-out-alt btn-logout hide"/>
        </div>
    );
}