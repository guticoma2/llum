import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './module-css/bars.sass';

class Bars extends Component {
	static defaultProps = {
		theme: styles,
	};
	static propTypes = {
		// eslint-disable-next-line react/forbid-prop-types
		theme: PropTypes.object
	};
	render() {
		return (<canvas className={this.props.theme.container} />);
	}
}

export default Bars;

