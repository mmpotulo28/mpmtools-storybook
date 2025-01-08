import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import LockUp from "../lockup";
import Button from "../button";
import { iCardProps, iOrientation } from "./types";
import { iVariant, iSize } from "../lockup/types";

const Card: React.FC<iCardProps> = ({
	overline = "",
	title,
	subtitle = "",
	content = "",
	image = {
		src: "https://via.placeholder.com/150",
		alt: "Placeholder Image",
	},
	actions,
	orientation = iOrientation.Portrait,
	variant = iVariant.Primary,
	size = iSize.Small,
}) => {
	return (
		<div className={`${styles.card} ${styles[variant]} ${styles[orientation]} ${styles[size]}`}>
			<div className={styles.cardHeader}>
				<Image src={image.src} alt={image.alt || "card Image"} height={250} width={250} />
				<span className={styles.imageAlt}>{image.alt}</span>
			</div>

			<div className={styles.cardContent}>
				<div className={styles.content}>
					<LockUp overline={overline} title={title} subtitle={subtitle} />
					<p>{content}</p>
				</div>

				<div className={styles.cardActions}>
					{actions && actions[0] && (
						<Button
							variant={iVariant.Primary}
							key={actions[0].label}
							label={actions[0].label}
							iconEnd={actions[0].icon}
							onClickFn={actions[0].onClick}
						/>
					)}
					{actions && actions[1] && (
						<Button
							variant={iVariant.Secondary}
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
