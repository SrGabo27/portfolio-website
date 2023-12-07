const elements = document.querySelectorAll(".typewrite");

console.log(elements);

export const elementInView = (el: Element, dividend = 1) => {
	const elementTop = el.getBoundingClientRect().top;

	return (
		elementTop <=
		(window.innerHeight || document.documentElement.clientHeight) / dividend
	);
};

export const elementOutOfView = (el: Element, dividend = 1) => {
	const elementTop = el.getBoundingClientRect().top;

	return (
		elementTop > (window.innerHeight || document.documentElement.clientHeight)
	);
};

const addScrollAnimation = (el: Element) => {
	const htmlEl = el as HTMLElement;

	/*	htmlEl.style.animation = "typing 1s steps(40), blink 0.7s step-end";
	htmlEl.style.whiteSpace = "nowrap";
	htmlEl.style.overflow = "hidden";
	htmlEl.style.opacity = "1";*/

	htmlEl.classList.add("typewrite__animate");
};

const removeScrollAnimation = (el: Element) => {
	el.classList.remove("typewrite__animate");
};

const handleScrollAnimations = () => {
	elements.forEach((el) => {
		if (elementInView(el, 1)) {
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
