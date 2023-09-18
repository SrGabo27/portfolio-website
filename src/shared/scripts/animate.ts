const elements = document.querySelectorAll(".typewrite");

const elementInView = (el: Element, dividend = 1) => {
	const elementTop = el.getBoundingClientRect().top;

	return (
		elementTop <=
		(window.innerHeight || document.documentElement.clientHeight) / dividend
	);
};

const elementOutOfView = (el: Element) => {
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
		if (elementInView(el)) {
			addScrollAnimation(el);
		} else if (elementOutOfView(el)) {
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
