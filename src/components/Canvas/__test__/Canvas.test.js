import React from 'react';
import { mount } from 'enzyme';
import Canvas from '../Canvas';

describe('Canvas is rendered', () => {
	test('Element exists', () => {
		const wrapper = mount(<Canvas />);
		expect(wrapper.find(Canvas));
	});
	// More test related with render...
});
