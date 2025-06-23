import React from "react";
import styles from "@/styles/components/Intro.module.css";
import image from "../../public/images/erik.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Intro({ buttonClick }) {
	return (
		<>
			<div className={styles["container"]}>
				<motion.div
					className={styles["text"]}
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1 }}
				>
					<h2>Hi, I&apos;m Erik</h2>
					<p>
						I&apos;m an experienced developer with a background in
						Computer Science and a passion for creating custom,
						visually appealing, and highly functional applications.
						<br />
						<br />
						Currently, I work with{" "}
						<a href="https://civiconnect.ca/" target="_blank">
							Civiconnect
						</a>{" "}
						as a Web Development Team Lead, where I focus on
						building scalable, efficient solutions and driving
						high-impact projects from concept to deployment.
					</p>
				</motion.div>
				<motion.div
					className={styles["image"]}
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1, delay: 0.4 }}
				>
					<Image
						src={image.src}
						width={400}
						height={300}
						alt="Erik"
					/>
				</motion.div>
			</div>
			<motion.div
				className={styles["button-container"]}
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.8 }}
			>
				<motion.button
					onClick={buttonClick}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					transition={{ type: "spring", stiffness: 300 }}
				>
					<FontAwesomeIcon icon={faChevronDown} />
				</motion.button>
			</motion.div>
		</>
	);
}
