/// <reference types="react" />
/** @format */
import './mylabel.css';
declare type Size = 'normal' | 'h1' | 'h2' | 'h3';
declare type Color = 'primary' | 'secondary' | 'tertiary';
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
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, }: Props) => JSX.Element;
export {};
