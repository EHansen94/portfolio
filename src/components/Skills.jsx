import React from "react";
import styles from "@/styles/components/Skills.module.css";

export default function Skills() {
	return (
		<div className={styles["wrapper"]}>
			<div className={styles["skills-container"]}>
				<div className={styles["skills"]}>
					<h2>Skills</h2>
					<ul className={styles["items"]}>
						<li>React</li>
						<li>Next.js</li>
						<li>JavaScript</li>
						<li>HTML</li>
						<li>CSS</li>
						<li>Tailwind CSS</li>
						<li>CSS Modules</li>
						<li>GitHub</li>
						<li>Strapi</li>
						<li>Supabase</li>
						<li>Figma</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
