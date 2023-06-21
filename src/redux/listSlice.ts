import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { createCard, getList, removeCard, updateCard } from "./operations";
import {
	fulfilledCreateCard,
	fulfilledGetList,
	fulfilledRemoveCard,
	fulfilledUpdateCard,
	pendingCreateCard,
	pendingGetList,
	pendingRemoveCard,
	pendingUpdateCard,
	rejectedCreateCard,
	rejectedGetList,
	rejectedRemoveCard,
	rejectedUpdateCard
} from "./handlers";

const listSlice = createSlice({
	name: "list",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getList.pending, pendingGetList)
			.addCase(getList.fulfilled, fulfilledGetList)
			.addCase(getList.rejected, rejectedGetList)
			.addCase(createCard.pending, pendingCreateCard)
			.addCase(createCard.fulfilled, fulfilledCreateCard)
			.addCase(createCard.rejected, rejectedCreateCard)
			.addCase(removeCard.pending, pendingRemoveCard)
			.addCase(removeCard.fulfilled, fulfilledRemoveCard)
			.addCase(removeCard.rejected, rejectedRemoveCard)
			.addCase(updateCard.pending, pendingUpdateCard)
			.addCase(updateCard.fulfilled, fulfilledUpdateCard)
			.addCase(updateCard.rejected, rejectedUpdateCard)
	}
});

export const listReducer = listSlice.reducer;
