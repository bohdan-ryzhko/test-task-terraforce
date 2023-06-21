import { IInitialState } from "../interfaces/IInitialState";

export const selectList = (state: IInitialState) => state.items;
export const selectIsLoad = (state: IInitialState) => state.isLoad;
export const selectIsLoadCreated = (state: IInitialState) => state.isLoadCreated;
