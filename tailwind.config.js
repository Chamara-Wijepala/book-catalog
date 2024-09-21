/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./views/**/*.ejs'],
	theme: {
		extend: {
			transitionDuration: {
				DEFAULT: '300ms',
			},
		},
	},
	plugins: [],
};
