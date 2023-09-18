/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,astro}"],
	theme: {
		extend: {
			colors: {
				turquoise: "var(--turquoise)",
				blue: "var(--blue)",
				"light-white": {
					400: "var(--light-white-400)",
					DEFAULT: "var(--light-white)",
				},
			},
			fontFamily: {
				fira: ["var(--font-fira-code)"],
				inter: ["var(--font-inter)"],
			},
		},
	},
	plugins: [],
};
