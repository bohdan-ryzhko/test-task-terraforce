import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { createCard, getList } from "./operations";
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
	}
});

export const listReducer = listSlice.reducer;
