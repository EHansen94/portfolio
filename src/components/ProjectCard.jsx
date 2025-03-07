import React from "react";
import styles from "@/styles/components/ProjectCard.module.css";
import Image from "next/image";

export default function ProjectCard({ project }) {
	return (
		<div className={styles["project-card"]}>
			<div className={styles["content"]}>
				{/* <img src={project.preview} alt="Project Image" /> */}
				<Image
					src={project.preview}
					alt="Project Image"
					width={800}
					height={500}
				/>
				<div className={styles["text"]}>
					<h3>{project.name}</h3>
					<p>
						{project.desc}
						<br />
					</p>
				</div>
				<div className={styles["stack"]}>
					{project.tools.map((tool, index) => (
						<div className={styles["stack-item"]} key={index}>
							{tool}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
