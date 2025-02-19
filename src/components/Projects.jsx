import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@/styles/components/Projects.module.css";
import Image from "next/image";

export default function Projects({ projectData }) {
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
						<p>{project.desc}</p>
					</div>
				))}
			</Slider>
		</div>
	);
}
