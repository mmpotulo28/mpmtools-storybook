import "@/styles/globals.css";
import React, { JSX, useState } from "react";
import {
	FaFacebook,
	FaTwitter,
	FaLinkedin,
	FaEnvelopeOpen,
	FaPhone,
	FaPhoneSquare,
	FaGithub,
	FaYoutube,
	FaBars,
	FaTimesCircle,
	FaHome,
	FaTicketAlt,
	FaQuestionCircle,
	FaAddressBook,
	FaUser,
	FaBookOpen,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";

interface Contact {
	type: "email" | "phone" | "phoneSquare";
	value: string;
}

interface SocialLink {
	icon: JSX.Element;
	url: string;
}

interface NavItem {
	icon: JSX.Element;
	label: string;
	href: string;
}

interface HeaderProps {
	contacts?: Contact[];
	socialLinks?: SocialLink[];
	navItems?: NavItem[];
	logoSrc?: string;
	logoAlt?: string;
}

const defaultContacts: Contact[] = [
	{ type: "email", value: "someone@gmail.com" },
	{ type: "phone", value: "+1234567890" },
	{ type: "phoneSquare", value: "+1234567890" },
];

const defaultSocialLinks: SocialLink[] = [
	{ icon: <FaFacebook />, url: "https://www.facebook.com" },
	{ icon: <FaTwitter />, url: "https://www.twitter.com" },
	{ icon: <FaLinkedin />, url: "https://www.linkedin.com" },
	{ icon: <FaGithub />, url: "https://www.github.com" },
	{ icon: <FaYoutube />, url: "https://www.youtube.com" },
];

const defaultNavItems: NavItem[] = [
	{ icon: <FaHome />, label: "Home", href: "/" },
	{ icon: <FaBookOpen />, label: "About", href: "/about" },
	{ icon: <FaTicketAlt />, label: "Tickets", href: "/tickets" },
	{ icon: <FaQuestionCircle />, label: "FAQ", href: "/faq" },
	{ icon: <FaAddressBook />, label: "Contact", href: "/contact" },
	{ icon: <FaUser />, label: "Profile", href: "/u" },
];

const defaultLogoSrc = "/image/only-friends-logo.png";
const defaultLogoAlt = "Logo";

const Header: React.FC<HeaderProps> = ({
	contacts = defaultContacts,
	socialLinks = defaultSocialLinks,
	navItems = defaultNavItems,
	logoSrc = defaultLogoSrc,
	logoAlt = defaultLogoAlt,
}) => {
	const [hideNav, setHideNav] = useState<boolean>(true);

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const openImageModal = (_data: { src: string; alt: string }) => {
		// Implement modal opening logic here
	};

	return (
		<header className={styles.header}>
			<div className={styles.topNav}>
				<div className={styles.contacts}>
					{contacts.map((contact, index) => (
						<div key={index} className={styles.contact}>
							{contact.type === "email" && <FaEnvelopeOpen />}
							{contact.type === "phone" && <FaPhone />}
							{contact.type === "phoneSquare" && <FaPhoneSquare />}
							<span>{contact.value}</span>
						</div>
					))}
				</div>

				<div className={styles.socials}>
					{socialLinks.map((social, index) => (
						<Link
							key={index}
							href={social.url}
							target="_blank"
							rel="noopener noreferrer">
							{social.icon}
						</Link>
					))}
				</div>
			</div>

			<div className={styles.mainNav}>
				<button
					onBlur={() => setHideNav(true)}
					onClick={() => setHideNav(!hideNav)}
					className={styles.toggleNav}>
					{hideNav ? <FaBars /> : <FaTimesCircle />}
				</button>
				<div className={`${styles.navItems} ${hideNav ? styles.hide : ""}`}>
					{navItems.map((item, index) => (
						<Link key={index} href={item.href}>
							{item.icon} <span>{item.label}</span>
						</Link>
					))}
				</div>
				<input
					className={styles.search}
					placeholder="Looking for something?"
					type="search"
					name="search"
					id="search"
				/>
				<div className={styles.navLogo}>
					<Image
						src={logoSrc}
						alt={logoAlt}
						width={50}
						height={50}
						onClick={() => openImageModal({ src: logoSrc, alt: logoAlt })}
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
