import Canvas from '../Canvas';
import { priceReader } from '../../../utils';

const prices = priceReader();

export default {
	component: Canvas,
	props: {
		data: prices[2].data,
		title: prices[2].title
	}
};
