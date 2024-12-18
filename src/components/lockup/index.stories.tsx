import type { Meta, StoryObj } from "@storybook/react";
import LockUp from "./index";
import { iVariant, iSize } from "./types";

const meta = {
	component: LockUp,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: { type: "radio" },
			options: Object.values(iVariant),
		},
		size: {
			control: { type: "radio" },
			options: Object.values(iSize),
		},
	},
} satisfies Meta<typeof LockUp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		overline: "Sample Overline",
		title: "Sample Title",
		subtitle: "Sample Subtitle",
		variant: iVariant.Primary,
		size: iSize.Medium,
	},
	render: (args) => <LockUp {...args} />,
} satisfies Story;
