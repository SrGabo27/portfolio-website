const elements = document.querySelectorAll(".typewrite");
const fadeElements = document.querySelectorAll("[class*='fade']");

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
	const htmlEl = el as HTMLElement;

	htmlEl.classList.add("typewrite__animate");
};

const removeScrollAnimation = (el: Element) => {
	el.classList.remove("typewrite__animate");
};

const handleScrollAnimations = () => {
	elements.forEach((el) => {
		if (elementInView(el, 1)) {
			addScrollAnimation(el);
		} else if (elementOutOfView(el)) {
			removeScrollAnimation(el);
		}
	});
};

const handleFadeAnimations = () => {
	fadeElements.forEach((el) => {
		if (elementInView(el, 1)) {
			if (el.classList.contains("fade-down"))
				el.classList.add("init-fade-down");
		} else if (elementOutOfView(el)) {
			if (el.classList.contains("fade-down"))
				el.classList.remove("init-fade-down");
		}
	});
};

window.addEventListener("scroll", () => {
	handleScrollAnimations();
	handleFadeAnimations();
});

window.addEventListener("load", () => {
	handleScrollAnimations();
});
