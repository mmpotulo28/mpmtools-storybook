import React, { ReactElement } from "react";
import styles from "./button.module.css";

interface iButtonProps {
	variant?: "primary" | "secondary" | "tertiary";
	size?: "sm" | "md" | "lg";
	iconEnd?: React.ReactNode;
	label?: string | ReactElement;
	className?: string;
	onClickFn?: () => void;
}

const Button: React.FC<iButtonProps> = ({
	variant = "primary",
	size = "md",
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
