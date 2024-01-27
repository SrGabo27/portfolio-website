export interface IIconProps {
	name: string;
	className?: string;
	onClick: () => void;
}

export function Icon(props: IIconProps) {
	const { name, className, onClick } = props;

	return (
		<span
			onClick={onClick}
			className={`material-symbols-outlined ${className}`}
		>
			{name}
		</span>
	);
}
