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
						<h4>Front End Developer</h4>
						<div className={styles["job-date"]}>
							<h5>University of Niagara Falls, ON.</h5>
							<h5>July 2025 – Present</h5>
						</div>
					</div>
					<div className={styles["job-description"]}>
						<p>
							As a Front End Developer, I focus on building and
							maintaining custom components for the Ellucian
							Experience platform. My work emphasizes modern web
							development practices using JavaScript, HTML, CSS,
							Node.js, and REST APIs, delivering responsive and
							scalable user interfaces aligned with institutional
							needs.
						</p>
						<ul>
							<li>
								Collaborate with cross-functional teams to
								understand business requirements and translate
								them into technical solutions within the
								Ellucian Experience, Colleague UI, TEAMia and
								related platforms.
							</li>
							<li>
								Design and develop custom cards using
								technologies such as JavaScript, and Node.js to
								enhance the user experience and meet specific
								University needs.
							</li>
							<li>
								Integrate REST APIs and other external systems
								to enable data exchange and functionality within
								the Ellucian environments and other systems at
								the University.
							</li>
							<li>
								Create communication templates using HTML to
								deliver personalized and engaging messages to
								students, faculty, and staff.
							</li>
							<li>
								Lead the design, development, and implementation
								of complex workflow processes within the systems
								at the University, utilizing Ellucian
								Workflow/Salesforce Flow, to streamline
								university operations and enhance user
								experience.
							</li>
							<li>
								Troubleshoot issues, optimize performance, and
								ensure scalability of custom solutions within
								the ecosystem of systems.
							</li>
						</ul>
					</div>
				</motion.div>
				<motion.div
					className={styles["experience"]}
					initial={{ opacity: 0, x: 40 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1.25, delay: 1.05 }}
				>
					<div className={styles["job-title"]}>
						<h4>Web Development Team Lead</h4>
						<div className={styles["job-date"]}>
							<h5>Civiconnect, Beamsville, ON.</h5>
							<h5>Apr. 2023 – July 2025</h5>
						</div>
					</div>
					<div className={styles["job-description"]}>
						<p>
							As a Web Development Team Lead at Civiconnect,
							I&apos;ve combined leadership and hands-on technical
							expertise to deliver high-quality web projects. I
							led six development teams, mentored junior
							developers, and facilitated smooth collaboration
							across teams. My role evolved to focus on
							architecting efficient, scalable codebases,
							streamlining workflows, and aligning development
							with evolving client needs.
						</p>
						<ul>
							<li>
								Mentored junior developers and led six
								development teams to deliver high-quality
								projects for diverse clientele.
							</li>
							<li>
								Conducted daily stand-up meetings and
								collaborated with project managers during sprint
								planning to align on priorities and address
								technical challenges.
							</li>
							<li>
								Transitioned into a more independent role
								focused on architecting scalable, maintainable
								codebases using React, Next.js, and modern
								development practices.
							</li>
							<li>
								Reviewed pull requests, resolved merge
								conflicts, and maintained clean project
								codebases on GitHub.
							</li>
							<li>
								Designed and developed wireframes, concept art,
								and interactive prototypes in Figma to guide
								UI/UX direction.
							</li>
							<li>
								Delivered presentations of prototypes and
								completed websites to stakeholders, ensuring
								alignment with project goals and client
								expectations.
							</li>
							<li>
								Continuously improved internal workflows,
								contributed to architectural decisions, and
								implemented best practices to optimize team and
								project efficiency.
							</li>
						</ul>
					</div>
				</motion.div>
				<motion.div
					className={styles["experience"]}
					initial={{ opacity: 0, x: 40 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1.25, delay: 1.55 }}
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
								feedback on peers&apos; code contributions to
								ensure code quality and maintain consistency in
								coding standards.
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
