/** @format */
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
