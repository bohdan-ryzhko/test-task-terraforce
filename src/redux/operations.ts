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

interface IRemoveCard {
	data: [string, boolean],
	id: number,
}

export const removeCard = createAsyncThunk<IRemoveCard, number>(
	"list/removeCard",
	async (cardId, { rejectWithValue }) => {
		try {
			const { data }: AxiosResponse<[string, boolean]> = await axios.delete(`https://yourtestapi.com/api/posts/${cardId}`);
			return {
				data,
				id: cardId
			};
		} catch (error: any) {
			toast.error(error?.message);
			return rejectWithValue(error);
		}
	}
);
