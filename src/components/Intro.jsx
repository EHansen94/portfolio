import React from "react";
import styles from "@/styles/components/Intro.module.css";
import image from "../../public/images/erik.png";

//putting this here to update ''s
export default function Intro() {
	return (
		<div className={styles["container"]}>
			<div className={styles["text"]}>
				<h2>Hi, I'm Erik</h2>
				<p>
					I'm a Full Stack Web Developer majoring in Computer Science.
					I'm currently working at{" "}
					<a href="https://civiconnect.ca/" target="_blank">
						Civiconnect{" "}
					</a>{" "}
					as a Web Development Team Lead.
					<br />
					<br />
					I'm passionate about building modern, visually appealing,
					and highly functional applications. I also enjoy mentoring
					junior developers, helping them grow their skills and
					confidence in web development.
				</p>
			</div>
			<div className={styles["image"]}>
				<img src={image.src} alt="Erik" />
			</div>
		</div>
	);
}
