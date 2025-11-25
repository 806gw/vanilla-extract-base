import * as styles from './app.css'

function App() {
	const text = 'Hover me!'

	return (
		<div className={styles.container}>
			<div className={styles.title}>
				{text.split('').map((char, index) => (
					<span
						key={index}
						className={styles.letter}
						style={{ animationDelay: `${index * 0.1}s` }}
					>
						{char === ' ' ? '\u00A0' : char}
					</span>
				))}
			</div>
		</div>
	)
}

export default App
