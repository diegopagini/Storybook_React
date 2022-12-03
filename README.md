<!-- @format -->

# Storybook - React

## MyLabel

#### MyLabel.tsx

```tsx
import './mylabel.css';

type Size = 'normal' | 'h1' | 'h2' | 'h3';
type Color = 'primary' | 'secondary' | 'tertiary';
export interface Props {
	/**
	 * This is the text to display on the label.
	 */
	label: string;
	/**
	 * This is the tag size.
	 */
	size: Size;
	/**
	 * Controls the capitalization of the text.
	 */
	allCaps?: boolean;
	/**
	 * Defines the color.
	 */
	color?: Color;
	/**
	 * Defines the font color.
	 */
	fontColor?: string;
}

export const MyLabel = ({
	allCaps = false,
	color = 'primary',
	label = 'No Label',
	size = 'normal',
	fontColor,
}: Props) => {
	return (
		<span className={`label ${size} text-${color}`} style={{ color: fontColor }}>
			{allCaps ? label.toUpperCase() : label}
		</span>
	);
};
```

#### MyLabel.stories.tsx

```tsx
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
```
