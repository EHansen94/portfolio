import React, { useContext } from "react";
import { useRouter } from "next/router";
import { DarkModeContext } from "@/util/darkModeContext";
import Link from "next/link";
import styles from "@/styles/components/Navbar.module.css";
import sun from "../../public/icons/sun.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import {
	faScroll,
	faBriefcase,
	faHouse,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
	const router = useRouter();
	const [darkModeToggle, setDarkModeToggle] = useContext(DarkModeContext);

	const handleScroll = (e, id) => {
		e.preventDefault();
		if (router.pathname !== "/") {
			router.push(`/#${id}`);
		} else {
			document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<nav className={styles["navbar-container"]}>
			<div className={styles["logo"]}>
				<Link href="/">EH</Link>
			</div>
			<ul className={styles["nav-links"]}>
				<li
					className={`${
						router.pathname == "/" ? styles["active"] : ""
					}`}
				>
					<div className={styles["desktop-link"]}>
						<Link href="/">Home</Link>
					</div>
					<div className={styles["mobile-link"]}>
						<Link href="/">
							<FontAwesomeIcon icon={faHouse} />
						</Link>
					</div>
				</li>
				<li
					className={`${
						router.pathname == "/projects" ? styles["active"] : ""
					}`}
				>
					<div className={styles["desktop-link"]}>
						<Link href="/projects">Projects</Link>
					</div>
					<div className={styles["mobile-link-projects"]}>
						<Link href="/projects">
							<FontAwesomeIcon icon={faBriefcase} />
						</Link>
					</div>
				</li>
				<li>
					<div className={styles["desktop-link"]}>
						<Link href="/experience">Experience</Link>
					</div>
					<div className={styles["mobile-link-contact"]}>
						<Link href="/experience">
							<FontAwesomeIcon icon={faScroll} />
						</Link>
					</div>
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
					<FontAwesomeIcon
						icon={faMoon}
						alt="moon icon"
						className={styles["moon-icon"]}
						onClick={() => setDarkModeToggle(!darkModeToggle)}
					/>
				)}
			</div>
		</nav>
	);
}
