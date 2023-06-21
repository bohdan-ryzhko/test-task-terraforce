import { FC } from "react";
import { LoaderButton } from "../LoaderButton/LoaderButton";

interface SubmitButtonProps {
	text: string,
	isLoad: boolean,
}

export const SubmitButton: FC<SubmitButtonProps> = ({ text, isLoad }) => {
	return (
		<button
			className="p-2 text-white h-12 rounded-md bg-red-500 hover:bg-red-700 transition-all duration-300 ease-in-out"
			type="submit"
		>
			{
				isLoad
					? <LoaderButton />
					: <span>{text}</span>
			}
		</button>
	)
}
