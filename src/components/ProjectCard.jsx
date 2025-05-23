import React from "react";
import styles from "@/styles/components/ProjectCard.module.css";
import Image from "next/image";
import Router from "next/router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";

export default function ProjectCard({ project }) {
	const handleClick = () => {
		Router.push(`/projects/${project.id}`);
	};

	return (
		<div className={styles["project-card"]} onClick={handleClick}>
			{/* <div className={styles["line"]}></div> */}
			<div className={styles["content"]}>
				<Image
					src={project.preview}
					alt={project.name}
					width={800}
					height={500}
				/>
				{/* <img src={project.preview} alt={project.name} /> */}
				<div className={styles["text"]}>
					<h3>{project.name}</h3>
					<p>
						<ReactMarkdown
							remarkPlugins={[remarkGfm]}
							rehypePlugins={[rehypeRaw, rehypeHighlight]}
							components={{
								p: ({ node, ...props }) => <p {...props} />,
								h3: ({ node, ...props }) => <h3 {...props} />,
								ul: ({ node, ...props }) => <ul {...props} />,
								li: ({ node, ...props }) => <li {...props} />,
								br: () => <br />,
							}}
						>
							{project.summary}
						</ReactMarkdown>
					</p>
				</div>

				<div className={styles["stack"]}>
					{project.tools.map((tool, index) => (
						<div className={styles["stack-item"]} key={index}>
							{tool}
						</div>
					))}
				</div>
				<div className={styles["line"]}></div>
			</div>
		</div>
	);
}
