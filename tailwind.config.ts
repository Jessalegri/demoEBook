/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
	  './src/**/*.{ts,tsx,js,jsx,css}',
	],
	theme: {
	  extend: {
		colors: {
		  border: 'hsl(var(--border))',
		  wellness: {
			ivory: '#F9F7F4',
			sand: '#E6DED5',
			sage: '#BECFC3',
			sky: '#C5D8E5',
			azure: '#91B3C9',
			slate: '#556974',
			charcoal: '#333A40',
		  },
		},
	  },
	},
	plugins: [require('tailwindcss-animate')],
  };