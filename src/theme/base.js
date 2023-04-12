const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addBase, theme }) {
    addBase({
        "html, body, #app": {
            position: "relative",
            fontFamily: theme("fontFamily.nunito"),
            fontStyle: "normal",
            backgroundColor: theme("colors.white.100"),
            padding: "0",
            margin: "0",
            minHeight: "100vh",
            minWidth: "350px",
        }
    })
})