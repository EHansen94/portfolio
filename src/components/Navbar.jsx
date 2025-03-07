import React, { useContext } from "react";
import { useRouter } from "next/router";
import { DarkModeContext } from "@/util/darkModeContext";
import Link from "next/link";
import styles from "@/styles/components/Navbar.module.css";
import homeL from "../../public/icons/home.svg";
import homeD from "../../public/icons/home-dark.svg";
import projectsL from "../../public/icons/projects.svg";
import projectsD from "../../public/icons/projects-dark.svg";
import contactL from "../../public/icons/contact.svg";
import contactD from "../../public/icons/contact-dark.svg";
import sun from "../../public/icons/sun.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

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
						{darkModeToggle ? (
							<Link href="/">
								<img src={homeD.src} />
							</Link>
						) : (
							<Link href="/">
								<img src={homeL.src} />
							</Link>
						)}
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
						{darkModeToggle ? (
							<Link href="/projects">
								<img src={projectsD.src} />
							</Link>
						) : (
							<Link href="/projects">
								<img src={projectsL.src} />
							</Link>
						)}
					</div>
				</li>
				<li>
					<div className={styles["desktop-link"]}>
						<a onClick={(e) => handleScroll(e, "contact")}>
							Contact
						</a>
					</div>
					<div className={styles["mobile-link-contact"]}>
						{darkModeToggle ? (
							<a onClick={(e) => handleScroll(e, "contact")}>
								<img src={contactD.src} />
							</a>
						) : (
							<a onClick={(e) => handleScroll(e, "contact")}>
								<img src={contactL.src} />
							</a>
						)}
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
