import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "@/styles/components/Navbar.module.css";
import sun from "../../public/sun.svg";
import moon from "../../public/moon.svg";

export default function Navbar() {
	const router = useRouter();
	const [darkModeToggle, setDarkModeToggle] = useState(false);

	console.log(router.pathname);

	return (
		<nav className={styles["navbar-container"]}>
			<div className={styles["logo"]}>
				<Link href="/">EH</Link>
			</div>
			<ul className={styles["nav-links"]}>
				<li className={`${router.pathname == "/" ? styles["active"] : ""}`}>
					<Link href="/">Home</Link>
				</li>
				<li className={`${router.pathname == "/projects" ? styles["active"] : ""}`}>
					<Link href="/projects">Projects</Link>
				</li>
				<li className={`${router.pathname == "/contact" ? styles["active"] : ""}`}>
					<Link href="/contact">Contact</Link>
				</li>
			</ul>
			<div className={styles["toggle-container"]}>
				{darkModeToggle ? (
					<img
						src={sun.src}
						alt="sun icon"
						className={styles["sun-icon"]}
						onClick={() => setDarkModeToggle(!darkModeToggle)}
					/>
				) : (
					<img
						src={moon.src}
						alt="moon icon"
						className={styles["moon-icon"]}
						onClick={() => setDarkModeToggle(!darkModeToggle)}
					/>
				)}
			</div>
		</nav>
	);
}
