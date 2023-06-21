import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICard } from "../interfaces/ICard";
import { IFormInput } from "../interfaces/IFormInput";
import { IInitialState } from "../interfaces/IInitialState";
import { toast } from "react-toastify";
import axios, { AxiosResponse } from "axios";
import { IRemoveCard } from "../interfaces/IRemoveCard";

axios.defaults.baseURL = "https://yourtestapi.com/api/posts/";

export const getList = createAsyncThunk<ICard[]>(
	"list/getList",
	async (_, { rejectWithValue }) => {
		try {
			const response: AxiosResponse<ICard[]> = await axios.get("");
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
				"",
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

export const removeCard = createAsyncThunk<IRemoveCard, number>(
	"list/removeCard",
	async (cardId, { rejectWithValue, getState }) => {
		try {
			const { items } = getState() as IInitialState;
			const removedCard = items.find(card => card.id === cardId);

			const { data }: AxiosResponse<[string, boolean]> = await axios.delete(`${cardId}`);

			toast.success(`${removedCard?.title} remove success!`);

			return { data, id: cardId };
		} catch (error: any) {
			toast.error(error?.message);
			return rejectWithValue(error);
		}
	}
);

interface IUpdatedData extends IFormInput {
	id: number,
}

export const updateCard = createAsyncThunk<ICard, IUpdatedData>(
	"list/updateCard",
	async (updatedData, { rejectWithValue }) => {
		try {
			const { data }: AxiosResponse<ICard> = await axios.put(
				`${updatedData.id}`,
				updatedData
			);
			toast.success(`${data.title} update success!`);
			return data;
		} catch (error) {
			toast.error("Updated Error");
			return rejectWithValue(error);
		}
	}
);
