import React, { Component } from 'react';
import Layout from './components/Layout';
import styles from './module-css/app.sass';
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
	render() {
		return (
			<div className={styles.container}>
				<header className={styles.header}>
					<h1 className={styles.title}><a href="https://www.holaluz.com">Holaluz</a></h1>
				</header>
				<Layout />
			</div>

		);
	}
}

export default App;
