<!-- @format -->

# Storybook - React

## MyLabel

#### MyLabel.tsx

```tsx
import './mylabel.css';

export const MyLabel = () => {
	return <span>Hola Mundo</span>;
};
```

#### MyLabel.stories.tsx

```tsx
/** @format */
import { MyLabel } from '../../components/MyLabel';

// 1 step.
export default {
	title: 'UI/MyLabel',
	component: MyLabel,
};
// 2 step.
const Template = () => <MyLabel />;
// 3 step.
export const Basic = Template.bind({});
```
