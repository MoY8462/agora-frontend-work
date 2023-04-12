const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        ".home": {
            padding: '0px 156px',
            ".home__list": {
                display: 'grid',
                gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
                gap: '1.5rem', /* 24px */
                "@media (min-width: 1200px)": {
                    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                },
                "@media (min-width: 1024px) and (max-width: 1200px)": {
                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                },
                "@media (min-width: 768px) and (max-width: 1024px)": {
                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                },
                "@media (min-width: 640px) and (max-width: 768px)": {
                    gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
                },          
            },

        }
    })
})