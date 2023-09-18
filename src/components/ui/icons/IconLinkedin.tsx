import { useState } from "react";
import type { IIcon } from "./interfaces/iconInterface";

export function IconLinkedin(props: IIcon) {
	const {
		width = "25px",
		color = "var(--light-white)",
		hoverColor = "var(--turquoise)",
	} = props;

	const [stateColor, setStateColor] = useState(color);

	return (
		<svg
			className="cursor-pointer"
			width={width}
			onMouseOver={() => setStateColor(hoverColor)}
			onMouseLeave={() => setStateColor(color)}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				strokeLinecap="round"
				strokeLinejoin="round"
			></g>
			<g id="SVGRepo_iconCarrier">
				{" "}
				<path
					d="M18 22V15C18 13.8954 17.1046 13 16 13C14.8954 13 14 13.8954 14 15V22H10"
					stroke={stateColor}
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>{" "}
				<path
					d="M10 22V15C10 11.6863 12.6863 9 16 9C19.3137 9 22 11.6863 22 15V22H18"
					stroke={stateColor}
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>{" "}
				<rect
					x="3"
					y="9"
					width="4"
					height="13"
					stroke={stateColor}
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				></rect>{" "}
				<circle
					cx="5"
					cy="4"
					r="2"
					stroke={stateColor}
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				></circle>{" "}
			</g>
		</svg>
	);
}
