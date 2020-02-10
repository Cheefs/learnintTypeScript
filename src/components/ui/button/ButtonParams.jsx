const DEFAULT = 'default';
const types = {
    default: {
        padding: '9px 23px',
        borderRadius: '3px',

        border: '1px solid transparent',
        backgroundColor: '#f16d7f',
        color: '#ffffff',
        fontWeight: 'bold',
        cursor: 'pointer',
        hover: {
            backgroundColor: '#e3455afc',
            color: '#ffffff',
        }
    },

    link: {
        border: 'none',
        backgroundColor: 'transparent',
        color: '#0332ff',
        fontWeight: 'bold',
        cursor: 'pointer',
        hover: {
            textDecoration: 'underline',
            backgroundColor: 'transparent',
            color: '#0332dd',
        }
    }
}

export const setType = (prop, option, subType = null) => {
    if ( subType ) {
        return types[prop] && types[prop][option][subType] ?
                types[prop][option][subType] : types[DEFAULT][option][subType];
    }

    return types[prop] && types[prop][option] ?
        types[prop][option] : types[DEFAULT][option];
}
