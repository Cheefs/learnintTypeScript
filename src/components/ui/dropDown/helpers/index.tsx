import React from 'react';
import { category } from '../interfaces';
import Style from '../style';

/**
 * render one unit of dropDown items
 * @param item: category
 * @param idx: number
 * @returns JSX.Element
 **/
export const renderItem: Function = ( item: category, idx: number ): JSX.Element => (
    <div key={ idx } data-id={ item.id } className="browse-menu">
        <Style.H3><Style.Link to={ item.href }>{ item.name }</Style.Link></Style.H3>
        <Style.Ul>{ renderSubCategories( item.subCategories ) }</Style.Ul>
    </div>
);

/**
 * render one unit of dropDown subItems
 * @param item: category
 * @param idx: number
 * @returns JSX.Element
 **/
export const renderSubItem: Function = ( item: category, idx: number ): JSX.Element => (
    <Style.Li key={ idx } data-id={ item.id } className="browse-menu-li">
        <Style.Link to={ item.href }>{ item.name }</Style.Link>
    </Style.Li>
);

/**
 * render sub categiries
 * @param subItems Array<subCategory>
 * @returns Array<JSX.Element>
 **/
export const renderSubCategories: Function = ( subItems: Array<category> ): Array<JSX.Element> => 
    subItems.map( (item: category, idx: number): JSX.Element => renderSubItem( item, idx ) );

/**
 * render dropDown options
 * @param options Array<category>
 * @returns Array<JSX.Element>
 **/
export const mapOptions: Function = ( options: Array<category>, noOptionsMessage: Function ): Array<JSX.Element> => {
    if ( !options.length ) {
        return noOptionsMessage ? noOptionsMessage() : 'Available Items Not Found';
    }
    return options.map( ( item: category, idx: number ): JSX.Element => renderItem( item, idx ) );
};