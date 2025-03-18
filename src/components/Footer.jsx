import React from "react";
import styles from "../styles/components/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
	return (
		<div className={styles["footer-container"]}>
			<div className={styles["footer-content"]}>
				<div className={styles["footer-cc"]}>
					<p>© 2025 - Designed & Developed by Erik Hansen</p>
				</div>
				<div className={styles["contact-links"]}>
					<p>Contact me:</p>
					<a
						href="mailto:ejhansen94@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faSquareEnvelope} />
					</a>
					<a
						href="https://www.linkedin.com/in/erik-hansen-a70180206
"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
					<a
						href="https://github.com/EHansen94"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faSquareGithub} />
					</a>
				</div>
			</div>
		</div>
	);
}
