import React from "react";
import styles from "@/styles/pages/projects.module.css";
import ProjectCard from "@/components/ProjectCard";

export default function projects() {
	return (
		<div className={styles["projects-page"]}>
			<h2>My Projects</h2>
			<div className={styles["projects"]}>
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
		</div>
	);
}
