/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{vue,js,ts,jsx,tsx}", "./resources/**/*.{html}"],
    safelist: [
        {
            pattern: /^(from|to)-[\w-]+$/
        },
        "to-white"
    ],
    theme: {
        extend: {}
    },
    plugins: []
};

