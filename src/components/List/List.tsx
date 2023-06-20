import { FC, useEffect } from "react";
import { Card } from "../Card/Card";
import { AppDispatch } from "../../types/AppDispatch";
import { useDispatch } from "react-redux";
import { getList } from "../../redux/operations";
import { useCustomState } from "../../hooks/useCustomState";
import { SkeletonLoaderSchema } from "../SkeletonLoaderSchema/SkeletonLoaderSchema";

export const List: FC = () => {
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
					<ul className="list-inside flex flex-wrap">
						{
							list.map(card =>
								<li
									className="relative"
									key={card.id}>
									<Card card={card} />
								</li>
							)
						}
					</ul>
			}
			<SkeletonLoaderSchema />
		</>
	)
}
