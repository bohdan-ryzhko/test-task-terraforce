import { ICard } from "./ICard";

export interface IInitialState {
	isLoad: boolean,
	isLoadCreared: boolean,
	isLoadRemoved: boolean,
	items: ICard[],
	error: null | unknown,
}
