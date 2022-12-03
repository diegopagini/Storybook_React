/** @format */
import './mylabel.css';

type Size = 'normal' | 'h1' | 'h2' | 'h3';
export interface Props {
	/**
	 * Este es el texto a mostrar en la etiqueta.
	 */
	label: string;
	/**
	 * Este es el tamaño de la etiqueta.
	 */
	size: Size;
}

export const MyLabel = ({ label = 'No Label', size = 'normal' }: Props) => {
	return <span className={`${size}`}>{label}</span>;
};
