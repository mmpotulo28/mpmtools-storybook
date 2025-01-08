import type { Meta, StoryObj } from "@storybook/react";
import Footer from "./index";

const meta = {
	component: Footer,
	title: "Components/Footer",
	tags: ["autodocs"],
	argTypes: {
		subscribeTitle: { control: "text" },
		subscribeDescription: { control: "text" },
		privacyPolicyLink: { control: "text" },
		links: { control: "object" },
		copyrightText: { control: "text" },
	},
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		subscribeTitle: "Subscribe to updates",
		subscribeDescription: "Stay informed about our latest offers and news.",
		privacyPolicyLink: "/privacy-policy",
		links: {
			support: [
				{ href: "/faqs", label: "FAQs" },
				{ href: "/feedback", label: "Feedback" },
				{ href: "/help-desk", label: "Help Desk" },
			],
			"follow-us": [
				{ href: "/facebook", label: "Facebook" },
				{ href: "/twitter", label: "Twitter" },
				{ href: "/instagram", label: "Instagram" },
				{ href: "/linkedin", label: "LinkedIn" },
				{ href: "/youtube", label: "YouTube" },
			],
			resources: [
				{ href: "/webinars", label: "Webinars" },
				{ href: "/e-books", label: "E-books" },
				{ href: "/blog", label: "Blog" },
				{ href: "/case-studies", label: "Case Studies" },
				{ href: "/newsletters", label: "Newsletters" },
				{ href: "/community", label: "Community" },
				{ href: "/get-started", label: "Get Started" },
			],
			"company info": [
				{ href: "/our-story", label: "Our Story" },
				{ href: "/careers", label: "Careers" },
				{ href: "/our-team", label: "Our Team" },
				{ href: "/our-values", label: "Our Values" },
				{ href: "/our-impact", label: "Our Impact" },
				{ href: "/our-partners", label: "Our Partners" },
			],
			"contact info": [
				{ href: "/email-us", label: "Email Us" },
				{ href: "/call-us", label: "Call Us" },
				{ href: "/visit-us", label: "Visit Us" },
			],
			"quick-links": [
				{ href: "/events", label: "Events" },
				{ href: "/contact-us", label: "Contact Us" },
				{ href: "/help-center", label: "Help Center" },
				{ href: "/terms-of-service", label: "Terms of Service" },
				{ href: "/privacy-policy", label: "Privacy Policy" },
				{ href: "/about-us", label: "About Us" },
				{ href: "/quick-links", label: "Quick Links" },
			],
		},
		copyrightText: "© 2024 OnlyFriends. All rights reserved.",
	},
};
