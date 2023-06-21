import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { IInitialState } from "../interfaces/IInitialState";
import { ICard } from "../interfaces/ICard";
import { IRemoveCard } from "../interfaces/IRemoveCard";

export const pendingGetList: CaseReducer<IInitialState> = (state) => {
	state.isLoad = true;
}

export const fulfilledGetList: CaseReducer<IInitialState, PayloadAction<ICard[]>> = (state, action) => {
	state.isLoad = false;
	state.error = null;
	state.items = action.payload;
}

export const rejectedGetList: CaseReducer<IInitialState, PayloadAction<unknown>> = (state, action) => {
	state.isLoad = false;
	state.error = action.payload;
}

export const pendingCreateCard: CaseReducer<IInitialState> = (state) => {
	state.isLoadCreated = true;
}

export const fulfilledCreateCard: CaseReducer<IInitialState, PayloadAction<ICard>> = (state, action) => {
	state.isLoadCreated = false;
	state.error = null;
	state.items.push(action.payload);
}

export const rejectedCreateCard: CaseReducer<IInitialState, PayloadAction<unknown>> = (state, action) => {
	state.isLoadCreated = false;
	state.error = action.payload;
}

export const pendingRemoveCard: CaseReducer<IInitialState> = (state) => {
	state.isLoadRemoved = true;
}

export const fulfilledRemoveCard: CaseReducer<IInitialState, PayloadAction<IRemoveCard>> = (state, action) => {
	state.isLoadRemoved = false;
	state.error = null;
	const findRemovedCardIndex = state.items.findIndex(card => card.id === action.payload.id);
	state.items.splice(findRemovedCardIndex, 1)
}

export const rejectedRemoveCard: CaseReducer<IInitialState, PayloadAction<unknown>> = (state, action) => {
	state.isLoadRemoved = false;
	state.error = action.payload;
}

export const pendingUpdateCard: CaseReducer<IInitialState> = (state) => {
	state.isLoadCreated = true;
}

export const fulfilledUpdateCard: CaseReducer<IInitialState, PayloadAction<ICard>> = (state, action) => {
	state.isLoadCreated = false;
	state.error = null;
	const findUpdateCardIndex = state.items.findIndex(card => card.id === action.payload.id);
	state.items.splice(findUpdateCardIndex, 1, action.payload);
}

export const rejectedUpdateCard: CaseReducer<IInitialState, PayloadAction<unknown>> = (state, action) => {
	state.isLoadCreated = false;
	state.error = action.payload;
}
