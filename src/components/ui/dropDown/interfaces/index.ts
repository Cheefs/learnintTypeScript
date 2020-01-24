export type category = { id: number, name: string, href: string, subCategories?: Array<category> };

export interface IDropDownOptions {
    show: boolean,
    options: Array<category>,
    noOptionsMessage?: Function
}

export interface IDropDown {
    title: string,
    options: Array<category>,
    noOptionsMessage?: Function
}