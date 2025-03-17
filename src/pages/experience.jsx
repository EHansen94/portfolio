import React from "react";
import styles from "@/styles/pages/experience.module.css";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";

export default function experience() {
	return (
		<div className={styles["experience-container"]}>
			<NextSeo
				title="My Experience | Erik Hansen"
				description="Professional experience and work history."
			/>
			<motion.h2
				initial={{ opacity: 0, x: -40 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 1.25 }}
			>
				Professional Experience
			</motion.h2>
			<div className={styles["experiences"]}>
				<motion.div
					className={styles["experience"]}
					initial={{ opacity: 0, x: 40 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1.25, delay: 0.625 }}
				>
					<div className={styles["job-title"]}>
						<h4>Web Development Team Lead</h4>
						<div className={styles["job-date"]}>
							<h5>Civiconnect, Beamsville, ON.</h5>
							<h5>Apr. 2023 – Present</h5>
						</div>
					</div>
					<div className={styles["job-description"]}>
						<p>
							As a Web Development Team Lead, I've led 6 different
							teams to deliver high-quality projects, while
							mentoring junior developers and ensuring smooth
							collaboration across the team members. Focused on
							building efficient and scalable codebases,
							streamlining workflows, and aligning development
							with client needs.
						</p>
						<ul>
							<li>
								Spearheaded and mentored junior developers
								across multiple projects for diverse clientele.
							</li>
							<li>
								Conducted daily stand-up meetings to track
								project progress and address team concerns
								promptly.
							</li>
							<li>
								Collaborated with project and development
								managers at the onset of 2-week sprints to
								strategize development priorities and address
								potential challenges.
							</li>
							<li>
								Engineered efficient and resilient codebase
								utilizing React and Next.js.
							</li>
							<li>
								Supervised project codebase on GitHub,
								meticulously reviewing pull requests, resolving
								conflicts, and merging changes into the main
								repository.
							</li>
							<li>
								Led presentations of prototypes and finalized
								websites to both management and clients,
								ensuring alignment with project objectives and
								client expectations.
							</li>
						</ul>
					</div>
				</motion.div>
				<motion.div
					className={styles["experience"]}
					initial={{ opacity: 0, x: 40 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1.25, delay: 1.25 }}
				>
					<div className={styles["job-title"]}>
						<h4>Web Developer</h4>
						<div className={styles["job-date"]}>
							<h5>Civiconnect, Beamsville, ON.</h5>
							<h5>Sept. 2022 - Apr. 2023</h5>
						</div>
					</div>
					<div className={styles["job-description"]}>
						<p>
							As a Web Developer, I worked within a development
							team led by a senior developer. I was responsible
							for implementing features and functionalities in
							various web projects, collaborating with team
							members to ensure timely delivery of project
							milestones while using tools such as React, Strapi,
							and Figma.
						</p>
						<ul>
							<li>
								Collaborated closely with senior developers to
								implement features and functionalities in
								various web projects.
							</li>
							<li>
								Actively participated in daily stand-up meetings
								to report progress, discuss roadblocks, and
								contribute to problem-solving discussions.
							</li>
							<li>
								Assisted in the planning and execution of
								development tasks within Agile/Scrum
								methodologies, ensuring timely delivery of
								project milestones.
							</li>
							<li>
								Contributed to the development of frontend
								components using technologies such as React and
								Next.js under the guidance of senior team
								members.
							</li>
							<li>
								Engaged in code review processes, providing
								feedback on peers' code contributions to ensure
								code quality and maintain consistency in coding
								standards.
							</li>
							<li>
								Worked closely with project managers to
								understand project requirements, translating
								them into actionable development tasks.
							</li>
							<li>
								Assisted in the presentation of project
								prototypes and final deliverables to internal
								stakeholders and clients, ensuring alignment
								with project objectives and client expectations.
							</li>
						</ul>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
