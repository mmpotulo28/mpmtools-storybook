export interface iAccordionItem {
	id?: number;
	title: string;
	subtitle?: string;
	content: string;
}

export interface iAccordionProps {
	overline?: string;
	title?: string;
	topContent?: string;
	items: iAccordionItem[];
}
