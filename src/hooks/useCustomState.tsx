import { useSelector } from "react-redux";
import { selectIsLoad, selectIsLoadCreared, selectList } from "../redux/selectors";

export const useCustomState = () => ({
	list: useSelector(selectList),
	isLoad: useSelector(selectIsLoad),
	isLoadCreared: useSelector(selectIsLoadCreared),
});
