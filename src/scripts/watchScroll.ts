import { elementInView } from "./animate";

const sections = document.querySelectorAll("section");

const handleSectionsInView = () => {
	sections.forEach((section) => {
		if (elementInView(section, 2)) {
			const event = new CustomEvent("updateNav", {
				detail: { anchor: section.id.toLowerCase() },
			});

			window.dispatchEvent(event);
		}
	});
};

window.addEventListener("scroll", () => {
	handleSectionsInView();
});

window.addEventListener("load", () => {
	handleSectionsInView();
});
