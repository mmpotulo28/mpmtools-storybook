import type { Meta, StoryObj } from "@storybook/react";
import Card from "./index";
import { Size, Variant } from "../lockup";

const meta: Meta<typeof Card> = {
	title: "Components/Card",
	component: Card,
	argTypes: {
		overline: { control: "text" },
		title: { control: "text" },
		subtitle: { control: "text" },
		content: { control: "text" },
		image: {
			control: "object",
			defaultValue: {
				src: "https://via.placeholder.com/150",
				alt: "Placeholder Image",
			},
		},
		actions: { control: "object" },
		orientation: {
			control: "radio",
			options: ["landscape", "portrait"],
		},
		variant: {
			control: "radio",
			options: Object.values(Variant), // Adjust based on your Variant enum
		},
		size: {
			control: "radio",
			options: Object.values(Size), // Adjust based on your Size enum
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		overline: "overline",
		title: "Card Title",
		subtitle: "subline text",
		content: "card content, can be anuhting from 0 characters to 256 characters. ",
		image: {
			src: "https://via.placeholder.com/150",
			alt: "Placeholder Image",
		},
		actions: [
			{
				label: "Primary",
				onClick: () => alert("Primary action clicked"),
				icon: <></>,
			},
			{
				label: "Secondary",
				onClick: () => alert("Secondary action clicked"),
				icon: <></>,
			},
		],
		orientation: "portrait",
		variant: Variant.Primary,
		size: Size.Medium,
	},
};

export const Tertiary: Story = {
	args: {
		overline: "overline",
		title: "Card Title",
		subtitle: "subline text",
		content: "card content, can be anuhting from 0 characters to 256 characters. ",

		image: {
			src: "https://via.placeholder.com/150",
			alt: "Placeholder Image",
		},

		actions: [
			{
				label: "Primary",
				onClick: () => {},
				icon: <></>,
			},
			{ label: "Secondary", onClick: () => {}, icon: <></> },
		],

		orientation: "portrait",
		variant: Variant.Tertiary,
		size: Size.Small,
	},
};
