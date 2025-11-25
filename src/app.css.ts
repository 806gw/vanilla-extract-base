import { style, keyframes } from '@vanilla-extract/css'

const fadeIn = keyframes({
	'0%': { opacity: 0 },
	'100%': { opacity: 1 },
})

const rainbow = keyframes({
	'0%': { color: '#ff0000' },
	'14%': { color: '#ff7f00' },
	'28%': { color: '#ffff00' },
	'42%': { color: '#00ff00' },
	'57%': { color: '#0000ff' },
	'71%': { color: '#4b0082' },
	'85%': { color: '#9400d3' },
	'100%': { color: '#ff0000' },
})

export const container = style({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100vh',
	width: '100%',
	backgroundColor: '#212121',
})

export const title = style({
	color: '#ffffff',
	fontSize: '3rem',
	animation: `${fadeIn} 1s ease-in-out`,
	cursor: 'pointer',
	display: 'flex',
	gap: '0.1rem',
})

export const letter = style({
	display: 'inline-block',
	transition: 'all 0.3s ease',

	selectors: {
		[`${title}:hover &`]: {
			animation: `${rainbow} 2s linear infinite`,
		},
	},
})
