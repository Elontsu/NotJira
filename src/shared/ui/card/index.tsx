import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
	onClick?: () => void;
	className: string;
}

export function Card({ children, onClick, className }: Props) {
	return (
		<div className={className} onClick={onClick}>
			{children}
		</div>
	);
}
