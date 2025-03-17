import React, { createContext, useState, useEffect } from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
	const [darkModeToggle, setDarkModeToggle] = useState(true);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const storedMode = JSON.parse(localStorage.getItem("lightMode"));
			if (storedMode !== null) {
				setDarkModeToggle(storedMode);
			}
			setIsLoading(false);
		}
	}, []);

	// Effect to add/remove class and persist to local storage
	useEffect(() => {
		if (darkModeToggle) {
			document.body.classList.add("light-mode");
			localStorage.setItem("darkMode", JSON.stringify(true));
		} else {
			document.body.classList.remove("light-mode");
			localStorage.setItem("lightMode", JSON.stringify(false));
		}
	}, [darkModeToggle]);

	// Avoid rendering anything during loading to stop flickering
	if (isLoading) return null;

	return (
		<DarkModeContext.Provider value={[darkModeToggle, setDarkModeToggle]}>
			{children}
		</DarkModeContext.Provider>
	);
};
