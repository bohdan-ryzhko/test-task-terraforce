import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { ICard } from "../interfaces/ICard";
import { IFormInput } from "../interfaces/IFormInput";
import { toast } from "react-toastify";

export const getList = createAsyncThunk<ICard[]>(
	"list/getList",
	async (_, { rejectWithValue }) => {
		try {
			const response: AxiosResponse<ICard[]> = await axios.get("https://yourtestapi.com/api/posts/");
			return response.data;
		} catch (error: any) {
			toast.error(error?.message);
			return rejectWithValue(error);
		}
	}
);

export const createCard = createAsyncThunk<ICard, IFormInput>(
	"list/createCard",
	async (newData, { rejectWithValue }) => {
		try {
			const response: AxiosResponse<ICard> = await axios.post(
				"https://yourtestapi.com/api/posts/",
				newData
			);
			toast.success(`${response.data.title} added success!`);
			return response.data;
		} catch (error: any) {
			toast.error(error?.message);
			return rejectWithValue(error);
		}
	}
);
