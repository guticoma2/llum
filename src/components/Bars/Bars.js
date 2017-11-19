import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './module-css/bars.sass';

class Bars extends Component {
	static defaultProps = {
		theme: styles,
		scale: 100,
		data: { }
	};
	static propTypes = {
		// eslint-disable-next-line react/forbid-prop-types
		theme: PropTypes.object,
		scale: PropTypes.number,
		// eslint-disable-next-line react/forbid-prop-types
		data: PropTypes.object
	};
	updateCanvas() {
		const context = this.el.getContext('2d');
		// TODO
	}
	setElement(el) { this.el = el; }
	render() {
		return (<canvas ref={(el) => this.setElement(el)} className={this.props.theme.container} />);
	}
}

export default Bars;

