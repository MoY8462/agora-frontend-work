const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        ".navbar": {
            height: '43px',
            marginTop: '24px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            '.navbar__logo': {
                height: '100%',
                width: '154px',
            },
            '.navbar__buttons': {
                display: 'flex',
                gap: '35px',
                justifyContent: 'space-between',
                'button': {
                    width: '32px',
                    height: '32px',
                }
            },
        }
    })
})