import { FC, ReactNode } from "react";

interface ContainerProps {
	children: ReactNode,
}

export const Container: FC<ContainerProps> = ({ children }) => (
	<div className="max-w-screen-xl mx-auto px-5 relative h-full">{children}</div>
);
