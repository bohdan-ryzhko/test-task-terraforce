import { FC, useEffect } from "react";
import { List } from "../List/List";
import { AppDispatch } from "../../types/AppDispatch";
import { useDispatch } from "react-redux";
import { getList } from "../../redux/operations";
import { useCustomState } from "../../hooks/useCustomState";

export const ShowList: FC = () => {
	const dispatch: AppDispatch = useDispatch();
	const { list, isLoad } = useCustomState();

	useEffect(() => {
		dispatch(getList());
	}, [dispatch]);

	return (
		<>
			<List list={list} isLoad={isLoad} />
		</>
	)
}
