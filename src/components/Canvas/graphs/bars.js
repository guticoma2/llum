const getColor = (min, max, price) => {
	if (price === min) return '#97caa3';
	if (price === max) return '#dc8c93';
	return '#f5dd93';
};

const config = {
	BAR_WIDTH: 20,
	TOP_MARGIN: 20,
	HOURS_PER_DAY: 24
};

const draw = (context, scale, pricesXHour = { }) => {
	const bottom = pricesXHour.maxPrice * scale;
	const max = pricesXHour.maxPrice;
	const min = pricesXHour.minPrice;
	for (let hour = 0, endHour = 23, x = 0; hour <= endHour; hour += 1) {
		const price = pricesXHour[hour] * scale;
		// eslint-disable-next-line
		context.fillStyle = getColor(min, max, pricesXHour[hour]);
		context.fillRect(x, bottom - price, config.BAR_WIDTH, bottom - (bottom - price));
		// eslint-disable-next-line
		context.fillStyle = 'black';
		context.fillText(hour, x, bottom + config.TOP_MARGIN);

		x += config.BAR_WIDTH;
	}
};

const getDimensions = (pricesXHour, scale) => ({
	height: pricesXHour ? ((pricesXHour.maxPrice * scale) + config.TOP_MARGIN) : config.TOP_MARGIN,
	width: (config.HOURS_PER_DAY * config.BAR_WIDTH)
});

export default { draw, getDimensions };
