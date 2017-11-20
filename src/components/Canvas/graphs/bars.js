export default (context, scale = 100, pricesXHour = { }) => {
	let x = 0;
	const bottom = pricesXHour.maxPrice * scale;
	for (let hour = 0, endHour = 23; hour < endHour; hour += 1) {
		const price = pricesXHour[hour] * scale;
		context.fillRect(x, bottom - price, 20, bottom);
		x += 20;
	}
};
