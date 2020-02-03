import React, { useState, EventHandler, SyntheticEvent } from 'react';
import Style from './style';
import { IDropDown } from './interfaces';
import { DropDownOptions } from './optionsComponent';

export const DropDown: React.FC<IDropDown> = ( props: IDropDown ): JSX.Element => {
    const [ collapse, toggle ] = useState( false );
    const { options, title, noOptionsMessage } = props;
    
    const handleCollapse: EventHandler<SyntheticEvent> = (): void => toggle(() => !collapse );

    return (
        <Style.Container className="dropdown__container">
            <Style.Button onClick={ handleCollapse } className="dropdown__button">{ title }</Style.Button>
            <DropDownOptions show={ collapse } options={ options } noOptionsMessage={ noOptionsMessage }/>
        </Style.Container>
    )
}