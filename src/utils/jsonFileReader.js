export default (file) => new Promise((resolve, reject) => {
	const fr = new FileReader();
	fr.onload = (e) => {
		resolve(JSON.parse(e.target.result));
	};
	fr.onerror = (e) => {
		reject(e.target.error);
	};
	fr.readAsText(file);
});

