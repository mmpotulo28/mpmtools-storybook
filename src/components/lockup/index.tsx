import React from "react";
import styles from "./lockup.module.css";

export enum Variant {
	Primary = "primary",
	Secondary = "secondary",
	Tertiary = "tertiary",
}
export type VariantType = keyof typeof Variant;

export enum Size {
	Small = "sm",
	Medium = "md",
	Large = "lg",
}
export type SizeType = keyof typeof Size;

export interface iLockUpProps {
	overline?: string;
	title?: string;
	subtitle?: string;
	variant?: Variant;
	size?: Size;
}

const LockUp: React.FC<iLockUpProps> = ({
	overline = "Default Overline",
	title = "Default Title",
	subtitle = "Default Subtitle",
	variant = "primary",
	size = "md",
}) => {
	const truncate = (text: string) => (text.length > 256 ? text.substring(0, 253) + "..." : text);

	return (
		<div className={`${styles.lockup} ${styles[variant]} ${styles[size]}`}>
			<span>{truncate(overline)}</span>
			<h1>{truncate(title)}</h1>
			<p>{truncate(subtitle)}</p>
		</div>
	);
};

export default LockUp;
