import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@/styles/components/ProjectsSlider.module.css";
import Image from "next/image";

export default function ProjectsSlider({ projectData }) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
	};

	return (
		<div className={styles["wrapper"]}>
			<h2>My Recent Projects</h2>
			<Slider {...settings}>
				{projectData.map((project) => (
					<div
						key={project.id}
						className={styles["project-container"]}
					>
						<div className={styles["image-container"]}>
							<Image
								src={project.image}
								alt={project.name}
								width={800}
								height={800}
							/>
						</div>

						<h3>{project.name}</h3>

						<div className={styles["description"]}>
							<p>{project.desc}</p>

							<div className={styles["links"]}>
								<Link href={`/projects/${project.id}`}>
									Learn More
								</Link>
								<Link href={project.link} target="_blank">
									Visit Website
								</Link>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
}
