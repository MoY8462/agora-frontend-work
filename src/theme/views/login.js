const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        ".login": {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100vh',
            padding: '24px', 
            ".login__container": {
                display: 'flex',
                flexDirection: 'column',
                gap: '48px',
                width: '100%',
                height: 'auto',
                ".login__container--header": {
                    display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    "svg": {
                        width: '100px',
                        height: '74px',
                        backgroundImage: theme("backgroundImage.agora_auth")
                    },
                    "h1": {
                        display: "none"
                    }
                },
                ".login__container--body": {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    gap: '36px',
                    'button': {
                        height: '41px'
                    }
                },
                ".login__container--footer": {
                    "h2": {
                        color: theme('colors.gray.200'),
                        fontWeight: '500',
                        fontSize: '18px',
                        lineHeight: '21px',
                        textAlign: 'center',
                    }
                }
                
            },
            "@media (min-width: 1200px)": {
                ".login__container": {
                    width: '749px',
                    height: 'auto',
                    padding: '36px 184px',
                },
            },
            "@media (min-width: 1024px) and (max-width: 1200px)": {
                ".login__container": {
                    width: '749px',
                    height: 'auto',
                    padding: '36px 184px',
                },
            },
            "@media (min-width: 768px) and (max-width: 1024px)": {
                ".login__container": {
                    width: '549px',
                    height: 'auto',
                    padding: '27px 92px',
                },
            },
            "@media (min-width: 640px) and (max-width: 767px)": {
                ".login__container": {
                    width: '549px',
                    height: 'auto',
                    padding: '27px 92px',
                },
            }, 
            "@media (min-width: 640px)": {
                alignItems: 'center',
                ".login__container": {
                    backgroundColor: theme('colors.white.default'),
                    boxShadow: '0px 2px 8px rgba(59, 66, 82, 0.2)',
                    borderRadius: '8px',
                    ".login__container--header": {
                        
                        height: '64px',
                        "svg": {
                            width: '36px',
                            height: '36px',
                            backgroundImage: theme("backgroundImage.agora_icon")
                        },
                        "h1": {
                            color: theme('colors.gray.200'),
                            display: 'initial',
                            fontWeight: '500',
                            fontSize: '24px',
                            lineHeight: '28px',
                        }
                        
                    }
                },
            },

        }
    })
})