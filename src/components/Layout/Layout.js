import React from 'react';
import Uploader from '../Uploader';
import Canvas from '../Canvas';
import {
	unionClassNames,
	priceReader
} from '../../utils';
import styles from './module-css/layout.sass';

export default (theme) => {
	const containerClass = unionClassNames(styles.container, theme.container);
	const uploaderContainerClass =
		unionClassNames(styles.uploaderContainer, theme.uploaderContainer);
	const canvasContainerClass =
		unionClassNames(styles.canvasContainer, theme.canvasContainer);
	const prices = priceReader();
	const getCanvasCollection = (data) =>
		data.map((dataByCanvas) =>
			<Canvas key={dataByCanvas.title} data={dataByCanvas.data} title={dataByCanvas.title} />);
	return (
		<div className={containerClass}>
			<section className={uploaderContainerClass}>
				<Uploader />
			</section>
			<section className={canvasContainerClass}>
				{getCanvasCollection(prices)}
			</section>
		</div>
	);
};
