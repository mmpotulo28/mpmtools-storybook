import React from "react";
import styles from "./footer.module.css";

interface FooterProps {
	subscribeTitle: string;
	subscribeDescription: string;
	privacyPolicyLink: string;
	links: { [group: string]: { href: string; label: string }[] };
	copyrightText: string;
}

const Footer: React.FC<FooterProps> = ({
	subscribeTitle,
	subscribeDescription,
	privacyPolicyLink,
	links,
	copyrightText,
}) => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.newsletter}>
					<div className={styles.content}>
						<h2 className={styles.newsletterTitle}>{subscribeTitle}</h2>
						<p className={styles.newsletterDescription}>{subscribeDescription}</p>
					</div>
					<div className={styles.actions}>
						<div className={styles.form}>
							<input
								className={styles.input}
								type="email"
								placeholder="Your email here"
							/>
							<button className={styles.button}>Subscribe</button>
						</div>
						<p className={styles.privacyText}>
							By subscribing, you accept our{" "}
							<a href={privacyPolicyLink}>Privacy Policy</a>
						</p>
					</div>
				</div>
				<div className={styles.divider}></div>
				<div className={styles.links}>
					{Object.keys(links).map((group) => (
						<div key={group} className={styles.linkGroup}>
							<h3 className={styles.linkGroupTitle}>{group}</h3>
							<ul>
								{Array.isArray(links[group]) &&
									links[group].map((link, index) => (
										<li key={index}>
											<a href={link.href}>{link.label}</a>
										</li>
									))}
							</ul>
						</div>
					))}
				</div>
				<div className={styles.divider}></div>
				<div className={styles.footerBottom}>
					<p>{copyrightText}</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
