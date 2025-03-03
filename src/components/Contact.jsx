import React from "react";
import styles from "../styles/components/Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
	return (
		<div className={styles["contact-container"]}>
			<div className={styles["contact-content"]}>
				<div className={styles["contact-info"]}>
					<h2>Get in Touch</h2>
					<div className={styles["contact-links"]}>
						<a
							href="mailto:Ejhansen94@gmail.com"
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
				<div className={styles["form-container"]}>
					<form className={styles["contact-form"]}>
						<div className={styles["form-group"]}>
							<input type="text" placeholder="Name" />
							<input type="email" placeholder="Email" />
						</div>
						<div className={styles["textarea-group"]}>
							<textarea placeholder="Message"></textarea>
						</div>
						<button type="submit">Submit</button>
					</form>
				</div>
			</div>
		</div>
	);
}
