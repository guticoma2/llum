export default function getFilesFromEvent(event) {
	const filesList = [];
	let filesEvent = [];
	// In case of Drag and Drop
	if (event.dataTransfer) {
		const dt = event.dataTransfer;
		if (dt.files && dt.files.length) {
			filesEvent = Array.prototype.slice.call(dt.files);
		} else if (dt.items && dt.items.length) {
			// During the drag even the dataTransfer.files is null
			// but Chrome implements some drag store, which is accesible via dataTransfer.items
			filesEvent = Array.prototype.slice.call(dt.items);
		}
	} else if (event.target && event.target.files) {
		filesEvent = Array.prototype.slice.call(event.target.files);
	}
	filesEvent.forEach((file) => {
		filesList.push({
			file,
			filePreviewUrl: window.URL.createObjectURL(file)
		});
	});
	return filesList;
}

