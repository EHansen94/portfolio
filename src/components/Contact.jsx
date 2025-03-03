import React from "react";
import styles from "../styles/components/Contact.module.css";

export default function Contact() {
	return (
		<div className={styles["contact-container"]}>
			<h2 className={styles["contact-title"]}>Contact Me</h2>
			<div className={styles["form-container"]}>
				<form className={styles["contact-form"]}>
					<div className={styles["form-group"]}>
						<input type="text" placeholder="Name" />
						<input type="email" placeholder="Email" />
					</div>
					<div className={styles["textarea-group"]}>
						<textarea placeholder="Message"></textarea>
					</div>

					<button type="submit">Send</button>
				</form>
			</div>
		</div>
	);
}
