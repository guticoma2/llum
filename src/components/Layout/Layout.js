import React from 'react';
import PropTypes from 'prop-types';
import Uploader from '../Uploader';
import Canvas from '../Canvas';
import {
	unionClassNames,
	priceReader,
	jsonFileReader
} from '../../utils';
import styles from './module-css/layout.sass';

class Layout extends React.Component {
	static defaultProps = {
		theme: styles,
	};
	static propTypes = {
		// eslint-disable-next-line react/forbid-prop-types
		theme: PropTypes.object
	}
	state = { file: undefined }
	onSubmit = (files) => {
		jsonFileReader(files[0].file).then((file) => {
			this.setState(Object.assign({ }, { file }));
		});
	}
	render() {
		const containerClass = unionClassNames(styles.container, this.props.theme.container);
		const uploaderContainerClass =
			unionClassNames(styles['uploader-container'], this.props.theme['uploader-container']);
		const canvasContainerClass =
			unionClassNames(styles['canvas-container'], this.props.theme['canvas-container']);
		const prices = priceReader(this.state.file);
		const getCanvasCollection = (data) =>
			data.map((dataByCanvas) =>
				<Canvas key={dataByCanvas.title} data={dataByCanvas.data} title={dataByCanvas.title} />);
		return (
			<div className={containerClass}>
				<section className={uploaderContainerClass}>
					<Uploader multiple={false} autoUpload onSubmit={this.onSubmit} allowedExtensions={['.json']} />
				</section>
				<section className={canvasContainerClass}>
					{getCanvasCollection(prices)}
				</section>
			</div>
		);
	}
}

export default Layout;
