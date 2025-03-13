import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { projectData } from "../../util/projectData";
import styles from "@/styles/pages/projectOverview.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import Link from "next/link";

export default function Project({ project }) {
	const router = useRouter();
	const [currentIndex, setCurrentIndex] = useState(0);
	const totalSlides = project.galleryImages.length;

	const nextSlide = () =>
		setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
	const prevSlide = () =>
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides
		);

	useEffect(() => {
		const autoSlide = setInterval(() => {
			nextSlide();
		}, 15000);
		return () => clearInterval(autoSlide);
	}, [currentIndex]);

	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	return (
		<div className={styles["page-container"]}>
			<h2>{project.name}</h2>

			{/* Markdown Description */}
			<div className={styles["markdown-wrapper"]}>
				<ReactMarkdown
					remarkPlugins={[remarkGfm]}
					rehypePlugins={[rehypeRaw, rehypeHighlight]}
				>
					{project.desc}
				</ReactMarkdown>
			</div>

			{project.link && (
				<div className={styles["link"]}>
					<Link href={project.link} target="_blank">
						Visit the Site
					</Link>
				</div>
			)}

			<div className={styles["carousel-container"]}>
				<button onClick={prevSlide} className={styles["nav-button"]}>
					<FontAwesomeIcon icon={faChevronLeft} />
				</button>
				<div className={styles["carousel"]}>
					{project.galleryImages.map((image, index) => (
						<div
							key={image}
							className={`${styles["item-wrapper"]} ${
								index === currentIndex
									? styles["active"]
									: styles["hidden"]
							}`}
						>
							<div className={styles["image-container"]}>
								<Image
									src={image}
									alt=""
									width={1000}
									height={1000}
								/>
							</div>
						</div>
					))}
				</div>
				<button onClick={nextSlide} className={styles["nav-button"]}>
					<FontAwesomeIcon icon={faChevronRight} />
				</button>
			</div>

			<div className={styles["dots"]}>
				{project.galleryImages.map((_, index) => (
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

			<div className={styles["tools"]}>
				<h3>Tools Used:</h3>
				<ul>
					{project.tools.map((tool, index) => (
						<li key={index}>{tool}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export async function getStaticPaths() {
	const paths = projectData.map((project) => ({
		params: { id: project.id.toString() },
	}));

	return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
	const project = projectData.find((p) => p.id.toString() === params.id);

	if (!project) {
		return { notFound: true };
	}

	return { props: { project } };
}
