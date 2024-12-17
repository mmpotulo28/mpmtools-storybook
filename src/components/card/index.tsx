import React, { ReactElement } from "react";
import styles from "./card.module.css";
import Image from "next/image";
import LockUp, { Size, Variant } from "../lockup";
import Button from "../button";

export interface iCardProps {
	overline?: string;
	title?: string;
	subtitle?: string;
	content: string | ReactElement;
	image?: {
		src: string;
		alt: string;
	};
	actions?: Array<{
		label: string;
		onClick: () => void;
		icon?: ReactElement;
	}>;
	orientation?: "landscape" | "portrait";
	variant?: Variant;
	size?: Size;
}

const Card: React.FC<iCardProps> = ({
	overline = "",
	title = "Default Title",
	subtitle = "",
	content = "lorem ipsum",
	image = {
		src: "https://via.placeholder.com/150",
		alt: "Placeholder Image",
	},
	actions = [
		{
			label: "Primary",
			onClick: () => {},
			icon: <></>,
		},
		{
			label: "Secondary",
			onClick: () => {},
			icon: <></>,
		},
	],
	orientation = "landscape",
	variant = Variant.Primary,
	size = Size.Small,
}) => {
	return (
		<div className={`${styles.card} ${styles[variant]} ${styles[orientation]} ${styles[size]}`}>
			<Image src={image.src} alt={image.alt || "card Image"} height={250} width={250} />

			<div className={styles.cardContent}>
				<LockUp overline={overline} title={title} subtitle={subtitle} />
				<p>{content}</p>

				<div className={styles.cardActions}>
					{actions[0] && (
						<Button
							variant={Variant.Primary}
							key={actions[0].label}
							label={actions[0].label}
							iconEnd={actions[0].icon}
							onClickFn={actions[0].onClick}
						/>
					)}
					{actions[1] && (
						<Button
							variant={Variant.Secondary}
							key={actions[1]?.label}
							label={actions[1]?.label}
							iconEnd={actions[1]?.icon}
							onClickFn={actions[1]?.onClick}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default Card;
