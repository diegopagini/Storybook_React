/** @format */
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MyLabel } from '../../components/MyLabel';

// 1 step.
export default {
	title: 'UI/MyLabel',
	component: MyLabel,
	argTypes: {
		size: { control: 'select' },
	},
} as ComponentMeta<typeof MyLabel>;
// 2 step.
const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />;
// 3 step.
export const Basic = Template.bind({});
Basic.args = {
	label: 'MyLabel',
	size: 'normal',
	allCaps: false,
};

// More Configurations.
export const AllCaps = Template.bind({});
AllCaps.args = {
	size: 'normal',
	allCaps: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
	size: 'normal',
	color: 'secondary',
};
export const Tertiary = Template.bind({});
Tertiary.args = {
	size: 'normal',
	color: 'tertiary',
};
