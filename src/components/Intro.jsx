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
						I&apos;m a Professional Full Stack Web Developer
						majoring in Computer Science. <br />I currently work
						with{" "}
						<a href="https://civiconnect.ca/" target="_blank">
							Civiconnect{" "}
						</a>{" "}
						as a Web Development Team Lead.
						<br />
						<br />
						I&apos;m passionate about building custom, visually
						appealing, and highly functional applications. I also
						enjoy mentoring junior developers, helping them grow
						their skills and confidence in web development.
					</p>
				</motion.div>
				<motion.div
					className={styles["image"]}
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1, delay: 0.5 }}
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
				transition={{ duration: 1, delay: 1 }}
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
