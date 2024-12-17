import type { Meta, StoryObj } from "@storybook/react";
import LockUp, { Size, Variant } from "./index";

const meta = {
	component: LockUp,
	argTypes: {
		variant: {
			control: { type: "select" },
			options: Object.values(Variant),
		},
		size: {
			control: { type: "select" },
			options: Object.values(Size),
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
		variant: Variant.Primary,
		size: Size.Medium,
	},
	render: (args) => <LockUp {...args} />,
} satisfies Story;
