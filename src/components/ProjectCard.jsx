import React from "react";
import styles from "@/styles/components/ProjectCard.module.css";
import cc from "../../public/images/cc.png";

export default function ProjectCard() {
	return (
		<div className={styles["project-card"]}>
			<div className={styles["content"]}>
				<img src={cc.src} alt="Project Image" />
				<div className={styles["text"]}>
					<h3>Project Title</h3>
					<p>
						A brief description of the project goes here. This is a
						brief description of the project.
					</p>
				</div>
				<div className={styles["stack"]}>
					<div className={styles["stack-item"]}>React</div>
					<div className={styles["stack-item"]}>Next.js</div>
					<div className={styles["stack-item"]}>TailwindCSS</div>
				</div>
			</div>
		</div>
	);
}
