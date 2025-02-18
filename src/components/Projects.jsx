import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "@/styles/components/Projects.module.css";
import Image from "next/image";
import tv from "../../public/images/tv.png";
import aoc from "../../public/images/aoc.png";

export default function Projects() {
	const projects = [
		{
			id: 1,
			name: "Twenty Valley Golf Club",
			image: tv,
			desc: "A website for a golf club in Vineland, Ontario.",
		},
		{
			id: 2,
			name: "Artists of Modern Kazakhstan",
			image: aoc,
			desc: "A website for a group of artists in Kazakhstan.",
		},
	];

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
			<Slider {...settings}>
				{projects.map((project) => (
					<div
						key={project.id}
						className={styles["project-container"]}
					>
						<h3>{project.name}</h3>
						<div className={styles["image-container"]}>
							<Image
								src={project.image}
								alt={project.name}
								width={800}
								height={800}
							/>
						</div>
						<p>{project.desc}</p>
					</div>
				))}
			</Slider>
		</div>
	);
}
