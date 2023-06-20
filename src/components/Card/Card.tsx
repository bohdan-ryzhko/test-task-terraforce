import { FC } from "react";
import { ICard } from "../../interfaces/ICard";
import { checkImageUrl, checkLinkUrl } from "../../utils/checkUrl";

interface CardProps {
	card: ICard,
}

export const Card: FC<CardProps> = ({ card: { title, text, image, url } }) => {
	return (
		<>
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
