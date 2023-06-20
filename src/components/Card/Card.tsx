import { FC } from "react";
import { ICard } from "../../interfaces/ICard";
import { checkImageUrl, checkLinkUrl } from "../../utils/checkUrl";
import { FaTrash } from 'react-icons/fa';
import { AppDispatch } from "../../types/AppDispatch";
import { useDispatch } from "react-redux";
import { removeCard } from "../../redux/operations";

interface CardProps {
	card: ICard,
}

export const Card: FC<CardProps> = ({ card: { title, text, image, url, id } }) => {
	const dispatch: AppDispatch = useDispatch();

	const onRemoveCard = (cardId: number) => () => {
		dispatch(removeCard(cardId));
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
					width={200}
					src={checkImageUrl(image)}
					alt={title} />
			</div>
			<h2>{title}</h2>
			<p>{text}</p>
			<a href={checkLinkUrl(url)}>Read more...</a>
		</>
	)
}
