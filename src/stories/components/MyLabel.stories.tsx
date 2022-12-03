/** @format */
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MyLabel } from '../../components/MyLabel';

// 1 step.
export default {
	title: 'UI/MyLabel',
	component: MyLabel,
} as ComponentMeta<typeof MyLabel>;
// 2 step.
const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />;
// 3 step.
export const Basic = Template.bind({});
Basic.args = {
	label: 'MyLabel',
	size: 'normal',
};
