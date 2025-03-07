import React from "react";
import styles from "@/styles/pages/projects.module.css";
import ProjectCard from "@/components/ProjectCard";
import { projectData } from "../../util/projectData";

export default function projects() {
	return (
		<div className={styles["projects-page"]}>
			<h2>My Projects</h2>
			<div className={styles["projects"]}>
				{projectData.map((project) => (
					<ProjectCard
						className={styles["project-item"]}
						key={project.id}
						project={project}
					/>
				))}
			</div>
		</div>
	);
}
