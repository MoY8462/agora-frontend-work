const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        ".field": {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '6px',
            height: '72px',
            width: '100%',
            ".field__title": {
                fontWeight: '500',
                fontSize: '18px',
                lineHeight: '21px',
                color: theme('colors.gray.100')
            },
            ".field__input": {
                color: theme('colors.gray.200'),
                border: `2px solid ${theme('colors.gray.100')}`,
                borderRadius: '6px',
                padding: '12px',
                width: '100%',
                outline: 'none',
                fontWeight: '500',
                fontSize: '18px',
                lineHeight: '21px',
            }
        }
    })
})