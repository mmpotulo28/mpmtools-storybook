export enum iVariant {
	Primary = "primary",
	Secondary = "secondary",
	Tertiary = "tertiary",
}
export type VariantType = keyof typeof iVariant;

export enum iSize {
	Small = "sm",
	Medium = "md",
	Large = "lg",
}
export type SizeType = keyof typeof iSize;

export interface iLockUpProps {
	overline?: string;
	title?: string;
	subtitle?: string;
	variant?: iVariant;
	size?: iSize;
}
