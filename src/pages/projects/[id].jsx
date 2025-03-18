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
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import Slider from "react-slick";

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
			<NextSeo
				title={`${project.name} | Erik Hansen`}
				description={project.desc}
			/>
			<motion.h2
				initial={{ opacity: 0, x: 20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 1, ease: "easeOut" }}
			>
				{project.name}
			</motion.h2>

			{/* Markdown Description */}
			<motion.div
				initial={{ opacity: 0, x: -20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 1.25, delay: 0.5, ease: "easeOut" }}
				className={styles["markdown-wrapper"]}
			>
				<ReactMarkdown
					remarkPlugins={[remarkGfm]}
					rehypePlugins={[rehypeRaw, rehypeHighlight]}
					components={{
						p: ({ node, ...props }) => <p {...props} />,
						h3: ({ node, ...props }) => <h3 {...props} />,
						ul: ({ node, ...props }) => <ul {...props} />,
						li: ({ node, ...props }) => <li {...props} />,
						br: () => <br />,
					}}
				>
					{project.desc}
				</ReactMarkdown>
			</motion.div>

			{project.link && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 1, ease: "easeOut" }}
					className={styles["link"]}
				>
					<Link href={project.link} target="_blank">
						Visit the Site
					</Link>
				</motion.div>
			)}

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
				className={styles["carousel-container"]}
			>
				<button onClick={prevSlide} className={styles["nav-button"]}>
					<FontAwesomeIcon icon={faChevronLeft} />
				</button>
				{/* Carousel- desktop */}
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
									width={800}
									height={600}
								/>
							</div>
						</div>
					))}
				</div>
				<button onClick={nextSlide} className={styles["nav-button"]}>
					<FontAwesomeIcon icon={faChevronRight} />
				</button>
			</motion.div>

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

			{/* Carousel- mobile */}
			<div className={styles["mobile-carousel"]}>
				<Slider
					infinite={true}
					speed={500}
					slidesToShow={1}
					slidesToScroll={1}
					autoplay={true}
					autoplaySpeed={15000}
					arrows={false}
					dots={false}
					className={styles["carousel-mobile"]}
				>
					{project.galleryImages.map((image, index) => (
						<div
							key={index}
							className={styles["slick-item-wrapper"]}
						>
							<div className={styles["slick-image-container"]}>
								<img src={image} alt="" />
							</div>
						</div>
					))}
				</Slider>
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
