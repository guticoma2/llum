const getColor = (min, max, price) => {
	if (price === min) return '#97caa3';
	if (price === max) return '#dc8c93';
	return '#f5dd93';
};
// const applyGradient = (context, rectCoord, min, max, hour, pricesXHour) => {
// 	const currColor = getColor(min, max, pricesXHour[hour]);
// 	const beforeColor = hour > 0 ? getColor(min, max, pricesXHour[hour - 1]) : currColor;
// 	const afterColor = hour < pricesXHour.length ? getColor(min, max, pricesXHour[hour + 1]) : currColor;
// 	const gradient = context.createLinearGradient(rectCoord.x, rectCoord.y, rectCoord.x + 20, rectCoord.y);
// 	if (currColor === afterColor && currColor === beforeColor) return currColor;
// 	gradient.addColorStop(0, beforeColor);
// 	gradient.addColorStop(1, afterColor);
// 	return gradient;
// };
export default (context, scale = 100, pricesXHour = { }) => {
	let x = 0;
	const bottom = pricesXHour.maxPrice * scale;
	const max = pricesXHour.maxPrice;
	const min = pricesXHour.minPrice;
	for (let hour = 0, endHour = 23; hour <= endHour; hour += 1) {
		const price = pricesXHour[hour] * scale;
		// eslint-disable-next-line
		context.fillStyle = getColor(min, max, pricesXHour[hour]); // applyGradient(context, { x, y: bottom - price }, min, max, hour, pricesXHour);
		context.fillRect(x, bottom - price, 20, bottom - (bottom - price));
		// eslint-disable-next-line
		context.fillStyle = 'black';
		context.fillText(hour, x, bottom + 20);

		x += 20;
	}
};

