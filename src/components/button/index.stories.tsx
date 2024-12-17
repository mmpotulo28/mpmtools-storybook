import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";

const meta = {
	component: Button,
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["primary", "secondary", "tertiary"],
		},
		size: {
			control: { type: "select" },
			options: ["sm", "md", "lg"],
		},
		iconEnd: { control: "text" },
		label: { control: "text" },
		className: { control: "text" },
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		variant: "primary",
		size: "md",
		label: "Button",
		className: "",
	},
	render: (args) => <Button {...args} />,
} satisfies Story;
