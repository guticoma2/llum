import React from 'react';
import { mount } from 'enzyme';
import Canvas from '../Canvas';

describe('Canvas is rendered', () => {
	test('Element exists', () => {
		const buttonWrapper = mount(<Canvas />);
		expect(buttonWrapper.find(Canvas));
	});
});
