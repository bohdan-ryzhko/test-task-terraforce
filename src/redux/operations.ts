import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { ICard } from "../interfaces/ICard";

export const getList = createAsyncThunk<ICard[]>(
	"list/getList",
	async (_, { rejectWithValue }) => {
		try {
			const response: AxiosResponse<ICard[]> = await axios.get("https://yourtestapi.com/api/posts/");
			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
