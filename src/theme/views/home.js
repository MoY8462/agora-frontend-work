const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        ".home": {
            padding: '0px 24px',
                  
            ".home__search": {
                maxWidth: '384px',
                margin: '36px 0',
                'label': {
                    width:'100%'
                }
            },
            ".home__list": {
                display: 'grid',
                gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
                gap: '1.5rem', /* 24px */        
            },
            "@media (min-width: 1200px)": {
                padding: '0px 156px',
                ".home__search":{
                    margin: '36px 0',
                },
                ".home__list":{
                    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                }
            },
            "@media (min-width: 1024px) and (max-width: 1200px)": {
                padding: '0px 60px',
                ".home__search":{
                    margin: '36px 0',
                },
                ".home__list":{
                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                }
            },
            "@media (min-width: 768px) and (max-width: 1024px)": {
                padding: '0px 60px',
                ".home__search":{
                    margin: '24px 0',
                },
                ".home__list":{
                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                }
            },
            "@media (min-width: 640px) and (max-width: 767px)": {
                padding: '0px 24px',
                ".home__search":{
                    margin: '24px 0',
                },
                ".home__list":{
                    gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
                }
            }, 

        }
    })
})