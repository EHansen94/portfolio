import React from "react";
import styles from "@/styles/components/Technologies.module.css";

export default function Technologies({ technologies }) {
	const repeatedTechs = [...technologies, ...technologies];

	return (
		<div className={styles["technologies-container"]}>
			<h2>Technologies</h2>
			<div className={styles["tech-slider"]}>
				<div className={styles["slider-track"]}>
					{repeatedTechs.map((tech, index) => (
						<div key={index} className={styles["tech-card"]}>
							<img src={tech.img} alt={tech.tech} />
							<p>{tech.tech}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
