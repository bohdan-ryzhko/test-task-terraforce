import { ICard } from "./ICard";

export interface IInitialState {
	isLoad: boolean,
	items: ICard[],
	error: null | unknown,
}
