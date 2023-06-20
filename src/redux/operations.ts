import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { ICard } from "../interfaces/ICard";
import { IFormInput } from "../interfaces/IFormInput";

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

export const createCard = createAsyncThunk<ICard, IFormInput>(
	"list/createCard",
	async (newData, { rejectWithValue }) => {
		try {
			const response: AxiosResponse<ICard> = await axios.post("https://yourtestapi.com/api/posts/", newData);
			console.log(response);
			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
