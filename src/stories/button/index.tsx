import React from "react";
import styles from "./button.module.css";
import { iButtonProps } from "./types";
import { iSize, iVariant } from "../lockup/types";

const Button: React.FC<iButtonProps> = ({
	variant = iVariant.Primary,
	size = iSize.Medium,
	iconEnd,
	label = "Button",
	className = "",
	onClickFn = () => {},
}) => {
	return (
		<button
			onClick={onClickFn}
			className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}>
			{label}
			{iconEnd && <span>{iconEnd}</span>}
		</button>
	);
};

export default Button;
