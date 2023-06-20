import { FC } from "react";
import { IoIosAdd } from 'react-icons/io';

interface ButtonCreateCardProps {
	setIsOpenModal: (isOpen: boolean) => void;
}

export const ButtonCreateCard: FC<ButtonCreateCardProps> = ({ setIsOpenModal }) => {
	return (
		<button
			onClick={() => setIsOpenModal(true)}
			className="absolute right-10 bottom-10 bg-tomato p-3 bg-red-500 rounded-full hover:bg-red-700 transition-all duration-300 ease-in-out">
			<IoIosAdd color="white" size={40} />
		</button>
	)
}
