export default (pricesXHour) => {
	const fixedPricesXHour = Object.assign({ }, pricesXHour);
	for (let hour = 0, maxHour = 23; hour <= maxHour; hour += 1) {
		if (pricesXHour[hour] === undefined) fixedPricesXHour[hour] = 0;
	}
	return fixedPricesXHour;
};
