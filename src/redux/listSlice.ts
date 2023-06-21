import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { createCard, getList, removeCard, updateCard } from "./operations";
import { fulfilledGetList, pendingGetList, rejectedGetList } from "./handlers";

const listSlice = createSlice({
	name: "list",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getList.pending, pendingGetList)
			.addCase(getList.fulfilled, fulfilledGetList)
			.addCase(getList.rejected, rejectedGetList)
			.addCase(createCard.pending, state => {
				state.isLoadCreared = true;
			})
			.addCase(createCard.fulfilled, (state, action) => {
				state.isLoadCreared = false;
				state.error = null;
				state.items.push(action.payload);
			})
			.addCase(createCard.rejected, (state, action) => {
				state.isLoadCreared = false;
				state.error = action.payload;
			})
			.addCase(removeCard.pending, state => {
				state.isLoadRemoved = true;
			})
			.addCase(removeCard.fulfilled, (state, action) => {
				state.isLoadRemoved = false;
				state.error = null;
				console.log(action.payload);
				const findRemovedCardIndex = state.items.findIndex(card => card.id === action.payload.id);
				state.items.splice(findRemovedCardIndex, 1)
			})
			.addCase(removeCard.rejected, (state, action) => {
				state.isLoadRemoved = false;
				state.error = action.payload;
			})
			.addCase(updateCard.pending, state => {
				state.isLoadCreared = true;
			})
			.addCase(updateCard.fulfilled, (state, action) => {
				state.isLoadCreared = false;
				state.error = null;
				const findUpdateCardIndex = state.items.findIndex(card => card.id === action.payload.id);
				state.items.splice(findUpdateCardIndex, 1, action.payload);
			})
			.addCase(updateCard.rejected, (state, action) => {
				state.isLoadCreared = false;
				state.error = action.payload;
			})
	}
});

export const listReducer = listSlice.reducer;
