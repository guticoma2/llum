import fillHourPriceRange from '../fillHourPriceRange';

test('fillHourPriceRange should fill informed hours with its price', () => {
	const range = {
		min: 0,
		max: 22,
		price: 1
	};
	const result = fillHourPriceRange(range);
	expect(Object.keys(result).filter((h) => result[h] === 1).length).toEqual(23);
});
