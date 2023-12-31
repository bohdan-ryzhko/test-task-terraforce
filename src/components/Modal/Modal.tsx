import { FC, MouseEventHandler, ReactElement } from "react";
import { MdClose } from 'react-icons/md';

interface ModalProps {
	isOpenModal: boolean,
	setIsOpenModal: (isOpen: boolean) => void;
	component: ReactElement,
}

export const Modal: FC<ModalProps> = ({ isOpenModal, setIsOpenModal, component: Component }) => {
	
	const handleCloseModal: MouseEventHandler<HTMLDivElement> = (event) => {
		const target = event.target as HTMLDivElement;

		if (!target.classList.contains("bg-opacity-30")) return;

		setIsOpenModal(false);
	};

	return (
		<>
			{
			isOpenModal &&
				(
					<div
						onClick={handleCloseModal}
						className="fixed bg-gray-400 bg-opacity-30 top-0 left-0 w-screen h-screen flex justify-center items-center z-10">
						<div className="px-5 w-3/4 md:w-1/2 max-w-3xl h-2/3 bg-white rounded-lg relative flex justify-center items-center">
							<button
								onClick={() => setIsOpenModal(false)}
								className="absolute top-4 right-4">
								<MdClose size={25} />
							</button>
							{ Component }
						</div>
					</div>
				)
			}
		</>
	)
}
