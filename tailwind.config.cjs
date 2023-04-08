/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
		"./node_modules/tw-elements/dist/js/**/*.js",
	],
	theme: {
		// colors:{
		//   // "custom": "#646464"
		// },
		extend: {},
	},
	plugins: [
		require("@tailwindcss/aspect-ratio"),
		require("flowbite/plugin"),
		require("tw-elements/dist/plugin"),
	],
};