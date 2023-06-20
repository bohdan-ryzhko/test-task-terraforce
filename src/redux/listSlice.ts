import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { getList } from "./operations";
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
	}
});

export const listReducer = listSlice.reducer;
