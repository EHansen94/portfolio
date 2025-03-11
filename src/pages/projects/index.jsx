import React from "react";
import { motion } from "framer-motion";
import styles from "@/styles/pages/projects.module.css";
import ProjectCard from "@/components/ProjectCard";
import { projectData } from "../../util/projectData";

export default function Projects() {
	return (
		<div className={styles["projects-page"]}>
			<h2>My Projects</h2>
			<div className={styles["projects"]}>
				{projectData
					.sort((a, b) => a.name.localeCompare(b.name))
					.map((project, index) => (
						<motion.div
							className={styles["project-item"]}
							key={project.id}
							initial={{ opacity: 0, x: 80 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.8,
								ease: "easeOut",
								delay: index * 0.2,
							}}
						>
							<ProjectCard project={project} />
						</motion.div>
					))}
			</div>
		</div>
	);
}
