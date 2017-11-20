import defaultJson from '../data/prices.json';
import normalizePriceHour from './normalizePriceHour';

export default (json = defaultJson) =>
	Object.keys(json).map((section) => ({
		data: normalizePriceHour(json[section]),
		title: section
	}));

