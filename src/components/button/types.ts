import { ReactElement } from "react";

export interface iButtonProps {
	variant?: "primary" | "secondary" | "tertiary";
	size?: "sm" | "md" | "lg";
	iconEnd?: React.ReactNode;
	label?: string | ReactElement;
	className?: string;
	onClickFn?: () => void;
}
