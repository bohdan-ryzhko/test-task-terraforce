import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { IInitialState } from "../interfaces/IInitialState";
import { ICard } from "../interfaces/ICard";

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
