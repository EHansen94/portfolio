import React from "react";
import styles from "@/styles/pages/home.module.css";
import Intro from "@/components/Intro";
import ProjectsSlider from "@/components/ProjectsSlider";
import { projectData } from "../util/projectData";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function home() {
	const goToProjects = () => {
		const projectsSection = document.getElementById("projects");
		if (projectsSection) {
			const offset = 60; // Nav height
			const top =
				projectsSection.getBoundingClientRect().top +
				window.scrollY -
				offset;
			window.scrollTo({ top, behavior: "smooth" });
		}
	};

	return (
		<div className={styles["page-container"]}>
			<Intro buttonClick={goToProjects} />
			<div id="projects">
				<ProjectsSlider projectData={projectData.slice(0, 3)} />
			</div>
			{/* <Skills /> */}
			{/* <Contact /> */}
		</div>
	);
}
