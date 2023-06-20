import { useSelector } from "react-redux";
import { selectIsLoad, selectList } from "../redux/selectors";

export const useCustomState = () => ({
	list: useSelector(selectList),
	isLoad: useSelector(selectIsLoad),
});
