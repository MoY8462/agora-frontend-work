const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        ".icon": {
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            "&_agora": {
                backgroundImage: theme("backgroundImage.agora")
            },
            "&_agora_auth": {
                backgroundImage: theme("backgroundImage.agora_auth"),
            },
            "&_agora_icon": {
                backgroundImage: theme("backgroundImage.agora_icon"),
            },
            "&_shopping_bag": {
                backgroundImage: theme("backgroundImage.shopping_bag"),
            },
            "&_user": {
                backgroundImage: theme("backgroundImage.user"),
            }
        },
    })
})