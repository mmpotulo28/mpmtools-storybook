import React from "react";
import styles from "./lockup.module.css";
import { iLockUpProps } from "./types";

const LockUp: React.FC<iLockUpProps> = ({
	overline,
	title = "LockUp Title",
	subtitle,
	variant = "primary",
	size = "md",
}) => {
	const truncate = (text?: string) => {
		if (!text) return "";
		return text.length > 256 ? text.substring(0, 253) + "..." : text;
	};

	return (
		<div className={`${styles.lockup} ${styles[variant]} ${styles[size]}`}>
			{overline && <span>{truncate(overline)}</span>}
			<h1>{truncate(title)}</h1>
			{subtitle && <p>{truncate(subtitle)}</p>}
		</div>
	);
};

export default LockUp;
