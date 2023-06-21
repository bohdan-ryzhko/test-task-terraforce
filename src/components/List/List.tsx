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
					<ul className="flex flex-wrap items-center gap-7 max-w-350 mx-auto sm:max-w-590 lg:max-w-900">
						{
							list.map(card =>
								<li
									className={"basis-full self-start sm:basis-[calc(100%/2-15px)] lg:basis-[calc(100%/3-20px)] relative"}
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
