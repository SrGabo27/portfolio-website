const elements = document.querySelectorAll(".typewrite");

export const elementInView = (el: Element, dividend = 1) => {
	const elementTop = el.getBoundingClientRect().top;

	return (
		elementTop <=
		(window.innerHeight || document.documentElement.clientHeight) / dividend
	);
};

export const elementOutOfView = (el: Element) => {
	const elementTop = el.getBoundingClientRect().top;

	return (
		elementTop > (window.innerHeight || document.documentElement.clientHeight)
	);
};

const addScrollAnimation = (el: Element) => {
	el.classList.add("typewrite__animate");
};

const removeScrollAnimation = (el: Element) => {
	el.classList.remove("typewrite__animate");
};

const handleScrollAnimations = () => {
	elements.forEach((el) => {
		if (elementInView(el, 2)) {
			addScrollAnimation(el);
		} else if (elementOutOfView(el, 2)) {
			removeScrollAnimation(el);
		}
	});
};

window.addEventListener("scroll", () => {
	handleScrollAnimations();
});

window.addEventListener("load", () => {
	handleScrollAnimations();
});
