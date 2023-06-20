import { FC } from "react";
import { ICard } from "../../interfaces/ICard";
import { Card } from "../Card/Card";

interface ListProps {
	list: ICard[],
	isLoad: boolean,
}

export const List: FC<ListProps> = ({ list, isLoad }) => {
	return (
		<>
			{
				isLoad
					? <p>Loading...</p>
					:
					<ul>
						{
							list.map(card =>
								<li key={card.id}>
									<Card card={card} />
								</li>
							)
						}
					</ul>
			}
		</>
	)
};
