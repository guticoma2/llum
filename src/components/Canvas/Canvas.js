import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bars from './graphs/bars';
import { unionClassNames } from '../../utils';
import styles from './module-css/canvas.sass';

class Canvas extends Component {
	static defaultProps = {
		theme: styles,
		scale: 1000,
		data: null,
		graphType: bars,
		title: 'Unknown'
	};
	static propTypes = {
		// eslint-disable-next-line react/forbid-prop-types
		theme: PropTypes.object,
		scale: PropTypes.number,
		// eslint-disable-next-line react/forbid-prop-types
		data: PropTypes.object,
		graphType: PropTypes.func,
		title: PropTypes.string
	};
	componentDidMount() {
		this.updateCanvas();
	}
	componentDidUpdate() {
		this.updateCanvas();
	}
	setElement(el) { this.el = el; }
	updateCanvas() {
		if (!this.props.data) return;
		const context = this.el.getContext('2d');
		this.props.graphType(context, this.props.scale, this.props.data);
	}
	render() {
		const titleClass = unionClassNames(styles.title, this.props.theme.title);
		const canvasClass = unionClassNames(styles.canvas, this.props.theme.canvas);
		const containerClass = unionClassNames(styles.container, this.props.theme.container);
		const dimensions = {
			height: this.props.data ? ((this.props.data.maxPrice * this.props.scale) + 20) : 20,
			width: (24 * 20)
		};
		return (
			<div className={containerClass}>
				<h4 className={titleClass}>{this.props.title}</h4>
				<canvas width={dimensions.width} height={dimensions.height} className={canvasClass} ref={(el) => this.setElement(el)} />
			</div>
		);
	}
}

export default Canvas;

