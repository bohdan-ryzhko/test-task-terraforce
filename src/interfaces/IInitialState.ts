import { ICard } from "./ICard";

export interface IInitialState {
	isLoad: boolean,
	isLoadCreated: boolean,
	isLoadRemoved: boolean,
	items: ICard[],
	error: null | unknown,
}
