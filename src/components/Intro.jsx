import React from "react";
import styles from "@/styles/components/Intro.module.css";
import image from "../../public/images/erik.png";

//putting this here to update ''s
export default function Intro() {
	return (
		<div className={styles["container"]}>
			<div className={styles["text"]}>
				<h2>Hi, Im Erik</h2>
				<p>
					Im a Full Stack Web Developer majoring in Computer Science. Im currently working at{" "}
					<a href="https://civiconnect.ca/" target="_blank">
						Civiconnect{" "}
					</a>{" "}
					as a Web Development Team Lead.
				</p>
			</div>
			<div className={styles["image"]}>
				<img src={image.src} alt="Erik" />
			</div>
		</div>
	);
}
