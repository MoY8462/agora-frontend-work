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
            "&_inbox_stack": {
                backgroundImage: theme("backgroundImage.inbox_stack"),
            },
            "&_shopping_bag": {
                backgroundImage: theme("backgroundImage.shopping_bag"),
            },
            "&_shopping_bag_dark": {
                backgroundImage: theme("backgroundImage.shopping_bag_dark"),
            },
            "&_user": {
                backgroundImage: theme("backgroundImage.user"),
            }
        },
    })
})