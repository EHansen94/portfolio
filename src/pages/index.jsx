import React from "react";
import styles from "@/styles/pages/home.module.css";
import Intro from "@/components/Intro";
import ProjectsSlider from "@/components/ProjectsSlider";
import { projectData } from "../util/projectData";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function home() {
	return (
		<div className={styles["page-container"]}>
			<Intro />
			<ProjectsSlider projectData={projectData} />
			<Skills />
			<Contact />
		</div>
	);
}
