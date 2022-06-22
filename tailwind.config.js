/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // add this lines
    "./pages/**/*.{js,ts,jsx,tsx}",
    // if you have other folder, add its path too, like this:
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
		extend: {
			colors: {
				'green-1': '#02554B',
				'green-2': '#038575',
				'grey-1': '#A5A5A5',
				'grey-2': '#EDEDED',
				'grey-3': '#9E9E9E',
				'grey-4': '#D5DBDA',
				'grey-5': '#F7F7F7',
				'grey-6': '#C2C2C2',
        'black-1': '#151C1B',
        'black-2': '#404040',
        'blue-1': '#3267E3',
			},
		},
	},
  plugins: [],
}
