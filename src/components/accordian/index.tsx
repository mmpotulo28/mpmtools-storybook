import React, { useState } from "react";
import styles from "./accordion.module.css";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

interface AccordionItem {
	title: string;
	subtitle?: string;
	content: string;
}

interface AccordionProps {
	title?: string;
	items: AccordionItem[];
}

const defaultItems: AccordionItem[] = [
	{
		title: "Item 1",
		subtitle: "Subtitle 1",
		content: "Content for item 1",
	},
	{
		title: "Item 2",
		subtitle: "Subtitle 2",
		content: "Content for item 2",
	},
	{
		title: "Item 3",
		subtitle: "Subtitle 3",
		content: "Content for item 3",
	},
];

const Accordion: React.FC<AccordionProps> = ({ title = "Default Title", items = defaultItems }) => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	if (items.length < 1) {
		items = defaultItems;
	}

	const handleItemClick = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div className={styles.accordion}>
			{title && <h1>{title}</h1>}
			{items?.map((item, index) => (
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
