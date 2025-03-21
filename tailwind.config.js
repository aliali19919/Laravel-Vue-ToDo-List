/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./resources/**/*.{vue,js,ts,jsx,tsx,blade.php}"], //add blade.php
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
};
