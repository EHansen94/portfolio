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
						I&apos;m an experienced software developer with a strong
						background in both Computer Science and Photonics.
						<br />
						<br />
						Currently, I work with the{" "}
						<a href="https://www.unfc.ca/" target="_blank">
							University of Niagara Falls, Canada
						</a>{" "}
						as a Front End Developer within the Systems & BI team,
						where I focus on building and maintaining custom
						components and workflows across various platforms, as
						well as ensuring seamless integration with various
						university systems.
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
