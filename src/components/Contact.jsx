import React from "react";
import styles from "../styles/components/Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact({ id }) {
	return (
		<section id={id}>
			<div className={styles["contact-container"]}>
				<div className={styles["contact-content"]}>
					<div className={styles["contact-info"]}>
						<h2>Get in Touch</h2>
						<div className={styles["contact-links"]}>
							<a
								href="mailto:ejhansen94@gmail.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faSquareEnvelope} />{" "}
								Email
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
						<form
							className={styles["contact-form"]}
							// action="https://formsubmit.co/ejhansen94@gmail.com"
							// method="POST"
						>
							<div className={styles["form-group"]}>
								<input
									type="text"
									name="name"
									placeholder="Name"
								/>
								<input
									type="email"
									name="email"
									placeholder="Email"
								/>
							</div>
							<div className={styles["textarea-group"]}>
								<textarea
									placeholder="Message"
									type="text"
									name="message"
								></textarea>
							</div>
							<button type="submit">Submit</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
