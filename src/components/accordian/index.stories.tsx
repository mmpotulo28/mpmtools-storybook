import type { Meta, StoryObj } from "@storybook/react";

import Index from "./index";

const meta = {
	component: Index,
	tags: ["autodocs"],
} satisfies Meta<typeof Index>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		overline: "Default Overline",
		title: "Default Title",
		topContent: "content at the top of the page, can be anything from 0 to any max characters",
		items: [
			{
				id: 1,
				title: "Item 1",
				subtitle: "Subtitle for item 1",
				content: "Content for item 1",
			},
			{
				id: 2,
				title: "Item 2",
				subtitle: "Subtitle for item 2",
				content: "Content for item 2",
			},
			{
				id: 3,
				title: "Item 3",
				subtitle: "Subtitle for item 3",
				content: "Content for item 3",
			},
			{
				id: 4,
				title: "Item 4",
				subtitle: "Subtitle for item 4",
				content: "Content for item 4",
			},
		],
	},
};
