import path from 'path';
import getFilesFromEvent from './getFilesFromEvent';

export default (event, filter = []) => (!filter.length ? getFilesFromEvent(event) :
	getFilesFromEvent(event).filter((f) => filter.some(
		(ext) => ext.toUpperCase() === path.extname(f.file.name).toUpperCase())));
