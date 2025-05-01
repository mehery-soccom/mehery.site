/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}","./src/@assets/**/*.{css,scss}", "./resources/**/*.html"],
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

