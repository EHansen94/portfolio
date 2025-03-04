import React from "react";
import styles from "../styles/components/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
	return (
		<div className={styles["footer-container"]}>
			<div className={styles["footer-content"]}>
				<div className={styles["footer-cc"]}>
					<p>© 2025 - Designed and Developed by Erik Hansen</p>
				</div>
				<div className={styles["contact-links"]}>
					<a
						href="mailto:ejhansen94@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faSquareEnvelope} /> Email
					</a>
					<a
						href="https://www.linkedin.com/in/erik-hansen-a70180206
"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faLinkedin} /> LinkedIn
					</a>
				</div>
			</div>
		</div>
	);
}
