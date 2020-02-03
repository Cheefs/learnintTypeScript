import { category } from "../../../ui/dropDown/interfaces";

function getUrlForCategory( category: string, type?: string, url?: string ): string {
    const baseUrl = url ? url : '/products';
    const categoryType = type ? `&type=${ type }`: '';
    return `${ baseUrl }?category${ category }${ categoryType }`;
}

export const dropDownCategories: Array<category> = [
    { id: 1, name: 'Woman', href: getUrlForCategory('woman'), subCategories: [
        { id: 1, name: 'Dresses', href: getUrlForCategory('woman', 'dresses') },
        { id: 2, name: 'Tops', href: getUrlForCategory('woman', 'type-tops') },
        { id: 3, name: 'Sweaters/Knits', href: getUrlForCategory('woman', 'sweaters-knits') },
        { id: 4, name: 'Jackets/Coats', href: getUrlForCategory('woman', 'jackets-coats') },
        { id: 5, name: 'Blazers', href: getUrlForCategory('woman', 'blazers') },
        { id: 6, name: 'Denim', href: getUrlForCategory('woman', 'denim') },
        { id: 7, name: 'Leggings/Pants', href: getUrlForCategory('woman', 'leggings-pants') },
        { id: 8, name: 'Skirts/Shorts', href: getUrlForCategory('woman', 'skirts-shorts') },
        { id: 9, name: 'Accessories', href: getUrlForCategory('woman', 'accessories') },
    ]},

    { id: 2, name: 'Man', href: getUrlForCategory('man'), subCategories: [
        { id: 1, name: 'Tees/Tank tops', href: getUrlForCategory('man', 'tees-tank_tops') },
        { id: 2, name: 'Shirts/Polos', href: getUrlForCategory('man', 'shirts-polos') },
        { id: 3, name: 'Sweaters', href: getUrlForCategory('man', 'sweaters') },
        { id: 4, name: 'Sweatshirts/Hoodies', href: getUrlForCategory('man', 'sweatshirts-hoodies') },
        { id: 5, name: 'Blazers', href: getUrlForCategory('man', 'blazers') },
        { id: 5, name: 'Jackets/vests', href: getUrlForCategory('man', 'jackets-vests') },
    ]},
];
