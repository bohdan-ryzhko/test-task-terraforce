import { useSelector } from "react-redux";
import { selectIsLoad, selectIsLoadCreated, selectList } from "../redux/selectors";

export const useCustomState = () => ({
	list: useSelector(selectList),
	isLoad: useSelector(selectIsLoad),
	isLoadCreated: useSelector(selectIsLoadCreated),
});
