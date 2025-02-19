import React from "react";
import styles from "@/styles/pages/home.module.css";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import { projectData } from "../util/projects";

export default function home() {
	return (
		<div className={styles["page-container"]}>
			<Intro />
			<Projects projectData={projectData} />
		</div>
	);
}
