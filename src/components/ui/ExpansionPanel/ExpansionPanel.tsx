import { useState, type ReactNode } from "react";
import { Icon } from "../icons/Icon";
import "./expansionPanelStyles.css";

export interface IExpansionPanelProps {
	title: string;
	children: ReactNode;
}

export function ExpansionPanel(props: IExpansionPanelProps) {
	const { title, children } = props;

	const [showContent, setShowContent] = useState(false);

	const toggleContent = () => {
		setShowContent(!showContent);
	};

	return (
		<div>
			<div className="flex gap-5 items-center">
				<div className="bg-turquoise w-[10px] h-[10px]"></div>

				<h2 className="text-light-white text-2xl font-bold w-fit flex gap-2 items-center">
					{title}

					<Icon
						name={`${showContent ? "expand_less" : "expand_more"}`}
						className="arrow cursor-pointer text-turquoise"
						onClick={toggleContent}
					/>
				</h2>
			</div>

			<div
				className={`expansion-content flex gap-5 h-full ${!showContent ? "hide" : "show"
					}`}
			>
				<div className="w-[2px] h-[auto] border-l-turquoise border border-dashed ml-[3px]"></div>

				{children}
			</div>
		</div>
	);
}
