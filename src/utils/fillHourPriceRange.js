export default (priceRange) => {
	const priceXHour = { };
	for (let ndx = priceRange.min; ndx <= priceRange.max; ndx += 1) {
		priceXHour[ndx] = priceRange.price;
	}
	return priceXHour;
};
