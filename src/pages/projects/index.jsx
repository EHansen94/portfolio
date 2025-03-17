import React from "react";
import { motion } from "framer-motion";
import styles from "@/styles/pages/projects.module.css";
import ProjectCard from "@/components/ProjectCard";
import { projectData } from "../../util/projectData";
import { NextSeo } from "next-seo";

export default function Projects() {
	return (
		<div className={styles["projects-page"]}>
			<NextSeo
				title="My Projects | Erik Hansen"
				description="A collection of projects I have worked on."
			/>
			<h2>My Projects</h2>
			<div className={styles["projects"]}>
				{[...projectData]
					.sort((a, b) => a.name.localeCompare(b.name))
					.map((project, index) => (
						<motion.div
							className={styles["project-item"]}
							key={project.id}
							initial={{ opacity: 0, x: 40 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{
								duration: 0.625,
								ease: "easeOut",
								delay: (index % 2) * 0.15,
							}}
						>
							<ProjectCard project={project} />
						</motion.div>
					))}
			</div>
		</div>
	);
}
