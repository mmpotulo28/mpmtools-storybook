import React, { useState } from "react";
import styles from "./accordion.module.css";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { iAccordionProps, iAccordionItem } from "./types";
import LockUp from "../lockup";

const Accordion: React.FC<iAccordionProps> = ({ overline, title, topContent, items = [] }) => {
	const [activeIndex, setActiveIndex] = useState<number>(0);

	const handleItemClick = (index: number) => {
		setActiveIndex(index);
	};

	return (
		<div className={styles.accordion}>
			{title && <LockUp title={title} overline={overline} />}
			<p className={styles.topContent}>{topContent}</p>
			{items?.map((item: iAccordionItem, index: number) => (
				<div
					key={index}
					className={`${styles["accordion-item"]} ${
						activeIndex === index ? styles.active : ""
					}`}>
					<div
						className={styles["accordion-item-header"]}
						onClick={() => handleItemClick(index)}>
						<div className={styles.left}>
							<h2>{item.title}</h2>
							{item.subtitle && <h3>{item.subtitle}</h3>}
						</div>
						<div className={styles.right}>
							{index === activeIndex ? <FaCaretUp /> : <FaCaretDown />}
						</div>
					</div>
					<div className={styles["accordion-item-content"]}>
						<p>{item.content}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Accordion;
