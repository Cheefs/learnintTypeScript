import React from 'react';
import Style from './style';

import { mapOptions } from './helpers';

import { IDropDownOptions } from './interfaces';

/**
 * component of Drop Down options
 * @param props: IDropDownOptions
 * @returns JSX.Element|null
 **/
export const DropDownOptions: React.FC<IDropDownOptions> = (props: IDropDownOptions ): JSX.Element|null => {
    const { show, options, noOptionsMessage } = props;
    return show ? (
        <Style.Nav className="browse-items">
            { mapOptions( options, noOptionsMessage ) }
        </Style.Nav>
    ) : null;
}