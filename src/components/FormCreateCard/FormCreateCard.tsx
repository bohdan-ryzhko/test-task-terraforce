import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../Input/Input";
import { IFormInput } from "../../interfaces/IFormInput";
import { AppDispatch } from "../../types/AppDispatch";
import { useDispatch } from "react-redux";
import { createCard } from "../../redux/operations";
import { useCustomState } from "../../hooks/useCustomState";
import { SubmitButton } from "../SubmitButton/SubmitButton";

export const FormCreateCard: FC = () => {
	const { register, reset, handleSubmit, formState: { errors } } = useForm<IFormInput>();
	const dispatch: AppDispatch = useDispatch();
	const { isLoadCreated } = useCustomState();

	const onSubmit: SubmitHandler<IFormInput> = (data) => {
		dispatch(createCard(data))
		reset();
	};

	return (
		<form
			className="flex flex-col gap-7 w-full"
			onSubmit={handleSubmit(onSubmit)}
		>
			<Input
				id="title"
				placeholder="Title"
				required
				register={register}
				error={errors.title}
			/>
			<Input
				id="text"
				placeholder="Text"
				required
				register={register}
				error={errors.text}
			/>
			<Input
				id="image"
				placeholder="Image"
				required
				register={register}
				error={errors.image}
			/>
			<Input
				id="url"
				placeholder="Url Link"
				required
				register={register}
				error={errors.url}
			/>

			<SubmitButton text="Create Card" isLoad={isLoadCreated} />
		</form>
	)
}
