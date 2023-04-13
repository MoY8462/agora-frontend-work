const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        ".card": {
            paddingBottom: '36px',
            ".card__img": {
                borderRadius: '8px 8px 0px 0px',
                width: '100%',
                height: '370px',
            },
            ".card__container": {
                backgroundColor: theme('colors.white.default'),
                borderRadius: '0px 0px 8px 8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '24px',
                padding: '24px 18px',
                ".card__container--headline": {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    padding: '0px',
                    gap: '3px',
                    ".headline--title": {
                        fontWeight: '700',
                        fontSize: '18px',
                        lineHeight: '21px',
                        color: theme('colors.gray.200')
                    },
                    ".headline--price": {
                        fontWeight: '300',
                        fontSize: '16px',
                        lineHeight: '18px',
                        color: theme('colors.gray.100')
                    },
                },
                ".card__container--description": {
                    fontWeight: '400',
                    fontSize: '18px',
                    lineHeight: '21px',
                    color: theme('colors.gray.200'),
                    height: '63px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                },
                ".card__container--footer": {
                    position: 'relative',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '12px',
                    height: '42px',
                    ".footer--icon": {
                        width: '24px',
                        height: '24px',
                    },
                    ".footer--text": {
                        fontWeight: '500',
                        fontSize: '16px',
                        lineHeight: '18px',
                        color: theme('colors.gray.100')
                    },
                    'button': {
                        position: 'absolute',
                        right: '0',
                        width: '42px',
                        height: '42px'
                    }
                }
            }
        }
    })
})