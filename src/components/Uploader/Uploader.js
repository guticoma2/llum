import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getFilesFromEventFiltered from '../../utils/getFilesFromEventFiltered';
import styles from './module-css/uploader.sass';

class Uploader extends Component {
	static defaultProps = {
		autoUpload: false,
		messageClickable: 'drop or click here',
		messageNotClickable: 'To upload a file ',
		multiple: false,
		onChange: () => { },
		onSubmit: () => { },
		theme: styles,
		onFocus: () => { },
		extensionsAllowed: []
	};
	static propTypes = {
		autoUpload: PropTypes.bool,
		messageClickable: PropTypes.string,
		messageNotClickable: PropTypes.string,
		multiple: PropTypes.bool,
		onChange: PropTypes.func,
		onSubmit: PropTypes.func,
		// eslint-disable-next-line react/forbid-prop-types
		theme: PropTypes.object,
		onFocus: PropTypes.func,
		// eslint-disable-next-line react/forbid-prop-types
		extensionsAllowed: PropTypes.array
	};
	componentDidMount() {
		document.addEventListener('dragover', (event) => { event.preventDefault(); }, false);
		document.addEventListener('drop', this.onDocumentDrop, false);
	}
	onChange = (event) => {
		event.preventDefault();
		this.onDrop(event);
	}
	onDrop = (event) => {
		event.preventDefault();
		const filesLoaded = getFilesFromEventFiltered(event, this.props.extensionsAllowed);
		if (!filesLoaded.length) return;
		if (this.props.autoUpload) {
			this.props.onSubmit(filesLoaded);
		}
		this.props.onChange(filesLoaded);
	}
	onClickMessage = () => {
		this.fileInputElement.click();
	}
	render() {
		const {
			messageClickable,
			messageNotClickable
		} = this.props;
		const inputFileAttributes = {
			type: 'file',
			multiple: this.props.multiple,
			onChange: this.onChange,
			style: {
				display: 'none'
			}
		};

		return (<div onDrop={this.onDrop} className={this.props.theme.container} onFocus={this.props.onFocus} >
			<span key="1">{messageNotClickable}</span>
			<a key="2" onClick={this.onClickMessage}>{messageClickable}</a>
			<input key="3" accept={this.props.extensionsAllowed.join(',')} {...inputFileAttributes} ref={(ref) => { this.fileInputElement = ref; }} />
		</div>);
	}
}


export default Uploader;
