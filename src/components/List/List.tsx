import sass from "./List.module.scss";
import { FC, useEffect } from "react";
import { Card } from "../Card/Card";
import { AppDispatch } from "../../types/AppDispatch";
import { useDispatch } from "react-redux";
import { getList } from "../../redux/operations";
import { useCustomState } from "../../hooks/useCustomState";
import { SkeletonLoaderSchema } from "../SkeletonLoaderSchema/SkeletonLoaderSchema";

interface ListCardProps {
	setIsOpenModal: (isOpen: boolean) => void;
	setUpdatedIndex: (cardId: number) => void;
}

export const List: FC<ListCardProps> = ({ setIsOpenModal, setUpdatedIndex }) => {
	const dispatch: AppDispatch = useDispatch();
	const { list, isLoad } = useCustomState();

	useEffect(() => {
		dispatch(getList());
	}, [dispatch]);

	return (
		<>
			{
				isLoad
					? <SkeletonLoaderSchema />
					:
					<ul className={sass.cardList}>
						{
							list.map(card =>
								<li
									className={`${sass.card} relative`}
									key={card.id}>
									<Card
										card={card}
										setIsOpenModal={setIsOpenModal}
										setUpdatedIndex={setUpdatedIndex}
									/>
								</li>
							)
						}
					</ul>
			}
		</>
	)
}
