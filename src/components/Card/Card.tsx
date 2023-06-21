import { FC } from "react";
import { ICard } from "../../interfaces/ICard";
import { checkImageUrl, checkLinkUrl } from "../../utils/checkUrl";
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from "react-icons/ai";
import { AppDispatch } from "../../types/AppDispatch";
import { useDispatch } from "react-redux";
import { removeCard } from "../../redux/operations";

interface CardProps {
	card: ICard,
	setIsOpenModal: (isOpen: boolean) => void;
	setUpdatedIndex: (cardId: number) => void;
}

export const Card: FC<CardProps> = ({ card: { title, text, image, url, id }, setIsOpenModal, setUpdatedIndex }) => {
	const dispatch: AppDispatch = useDispatch();

	const onRemoveCard = (cardId: number) => () => {
		dispatch(removeCard(cardId));
	}

	const handleOpenUpdateModal = () => {
		setUpdatedIndex(id)
		setIsOpenModal(true)
	}

	return (
		<>
			<button
				onClick={onRemoveCard(id)}
				className="absolute">
				<FaTrash size={20} />
			</button>
			<div className="cardImage">
				<img
					height={160}
					src={checkImageUrl(image)}
					alt={title} />
			</div>
			<h2>{title}</h2>
			<p>{text}</p>
			<div className="flex justify-between">
				<a href={checkLinkUrl(url)}>Read more...</a>
				<button
					onClick={handleOpenUpdateModal}
				>
					<AiFillEdit size={20} />
				</button>
			</div>
		</>
	)
}
