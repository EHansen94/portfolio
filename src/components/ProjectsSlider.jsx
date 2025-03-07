import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/ProjectsSlider.module.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function ProjectsSlider({ projectData }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const totalSlides = projectData.length;

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
	};

	const prevSlide = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides
		);
	};

	useEffect(() => {
		const autoSlide = setInterval(() => {
			nextSlide();
		}, 15000);
		return () => clearInterval(autoSlide);
	}, [currentIndex]);

	return (
		<div className={styles["wrapper"]}>
			<div className={styles["header"]}>
				<h2>My Recent Projects</h2>
				<a href="/projects">View All Projects</a>
			</div>
			<div className={styles["carousel-container"]}>
				<button onClick={prevSlide} className={styles["nav-button"]}>
					<FontAwesomeIcon icon={faChevronLeft} />
				</button>
				<div className={styles["carousel"]}>
					{projectData.map((project, index) => (
						<div
							key={project.id}
							className={`${styles["project"]} ${
								index === currentIndex
									? styles["active"]
									: styles["hidden"]
							}`}
						>
							<div className={styles["image-container"]}>
								<Image
									className={styles["image"]}
									src={project.image}
									alt={project.name}
									width={800}
									height={300}
								/>
							</div>

							<div className={styles["content"]}>
								<h3>{project.name}</h3>
								<div className={styles["description"]}>
									<p>{project.desc}</p>

									<div className={styles["links"]}>
										<Link href={`/projects/${project.id}`}>
											Learn More
										</Link>
										<Link
											href={project.link}
											target="_blank"
										>
											Visit Website
										</Link>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				<button onClick={nextSlide} className={styles["nav-button"]}>
					<FontAwesomeIcon icon={faChevronRight} />
				</button>
			</div>
			<div className={styles["dots"]}>
				{projectData.map((_, index) => (
					<span
						key={index}
						className={
							index === currentIndex
								? styles["dot-active"]
								: styles["dot"]
						}
						onClick={() => setCurrentIndex(index)}
					></span>
				))}
			</div>
		</div>
	);
}
