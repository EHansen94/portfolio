import React from "react";
import { projectData } from "../../util/projectData";
import { useRouter } from "next/router";
import styles from "@/styles/pages/projectOverview.module.css";

export default function Project({ project }) {
	const router = useRouter();

	// Handle fallback state when the page is not yet generated
	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	return (
		<div className={styles["page-container"]}>
			<h2>{project.name}</h2>
			<img src={project.preview} alt={project.name} />
			<p>{project.desc}</p>
			<a href={project.link} target="_blank" rel="noopener noreferrer">
				Visit Project
			</a>
			<div>
				<h3>Tools Used:</h3>
				<ul>
					{project.tools.map((tool, index) => (
						<li key={index}>{tool}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export async function getStaticPaths() {
	// Generate paths based on projectData
	const paths = projectData.map((project) => ({
		params: { id: project.id.toString() }, // Ensure ID is a string
	}));

	return {
		paths,
		fallback: true, // Can also be 'blocking' if you want better SEO
	};
}

export async function getStaticProps({ params }) {
	const project = projectData.find((p) => p.id.toString() === params.id);

	if (!project) {
		return {
			notFound: true,
		};
	}

	return {
		props: { project },
	};
}
