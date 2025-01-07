import type { Meta, StoryObj } from "@storybook/react";
import Header from "./index";
import {
	FaFacebook,
	FaTwitter,
	FaLinkedin,
	FaGithub,
	FaYoutube,
	FaHome,
	FaBookOpen,
	FaTicketAlt,
	FaQuestionCircle,
	FaAddressBook,
	FaUser,
} from "react-icons/fa";

const meta: Meta<typeof Header> = {
	title: "Components/Header",
	component: Header,
	tags: ["autodocs"],
	argTypes: {
		contacts: { control: "object" },
		socialLinks: { control: "object" },
		navItems: { control: "object" },
		logoSrc: { control: "text" },
		logoAlt: { control: "text" },
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		contacts: [
			{ type: "email", value: "someone@gmail.com" },
			{ type: "phone", value: "+1234567890" },
			{ type: "phoneSquare", value: "+1234567890" },
		],
		socialLinks: [
			{ icon: <FaFacebook />, url: "https://www.facebook.com" },
			{ icon: <FaTwitter />, url: "https://www.twitter.com" },
			{ icon: <FaLinkedin />, url: "https://www.linkedin.com" },
			{ icon: <FaGithub />, url: "https://www.github.com" },
			{ icon: <FaYoutube />, url: "https://www.youtube.com" },
		],
		navItems: [
			{ icon: <FaHome />, label: "Home", href: "/" },
			{ icon: <FaBookOpen />, label: "About", href: "/about" },
			{ icon: <FaTicketAlt />, label: "Tickets", href: "/tickets" },
			{ icon: <FaQuestionCircle />, label: "FAQ", href: "/faq" },
			{ icon: <FaAddressBook />, label: "Contact", href: "/contact" },
			{ icon: <FaUser />, label: "Profile", href: "/u" },
		],
		logoSrc: "/image/only-friends-logo.png",
		logoAlt: "Logo",
	},
};
