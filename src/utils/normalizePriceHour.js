import fillHourPriceRange from './fillHourPriceRange';
import fixEmptyHours from './fixEmptyHours';

export default (prices = []) => {
	const normalizedPriceXHour = { };
	const pricesArr = [];
	prices.forEach((hourRange) => {
		const key = Object.keys(hourRange)[0];
		const rangeArr = key.split('-');
		const priceRange = {
			min: parseInt(rangeArr[0], 10),
			max: parseInt(rangeArr[1], 10),
			price: parseFloat(hourRange[key])
		};
		pricesArr.push(priceRange.price);
		Object.assign(normalizedPriceXHour, fillHourPriceRange(priceRange));
	});
	const fixedPriceHour = fixEmptyHours(normalizedPriceXHour);
	fixedPriceHour.maxPrice = pricesArr.reduce((a, b) => Math.max(a, b));
	fixedPriceHour.minPrice = pricesArr.reduce((a, b) => Math.min(a, b));
	return fixedPriceHour;
};
