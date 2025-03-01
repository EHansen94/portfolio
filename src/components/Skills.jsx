import React from "react";
import styles from "@/styles/components/Skills.module.css";

export default function Skills() {
	return (
		<div className={styles["wrapper"]}>
			<div className={styles["skills-container"]}>
				<div className={styles["skills"]}>
					<h2>Technical Skills</h2>
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
				<div className={styles["skills"]}>
					<h2>Additional Skills</h2>
					<ul className={styles["items"]}>
						<li>Leading Development Teams</li>
						<li>Code Reviews</li>
						<li>Version Control</li>
						<li>Project Management</li>
						<li>Project Planning</li>
						<li>Prototyping</li>
						<li>Client Presentations</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
