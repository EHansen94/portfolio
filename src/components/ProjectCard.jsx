import React from "react";
import styles from "@/styles/components/ProjectCard.module.css";
import Image from "next/image";
import Router from "next/router";

export default function ProjectCard({ project }) {
	const handleClick = () => {
		Router.push(`/projects/${project.id}`);
	};

	return (
		<div className={styles["project-card"]} onClick={handleClick}>
			<div className={styles["content"]}>
				<Image
					src={project.preview}
					alt={project.name}
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
