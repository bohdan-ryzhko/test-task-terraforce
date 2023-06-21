import { FC } from "react";
import { IFormInput } from "../../interfaces/IFormInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../types/AppDispatch";
import { useCustomState } from "../../hooks/useCustomState";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import { checkImageUrl } from "../../utils/checkUrl";
import { updateCard } from "../../redux/operations";
import { ControlInput } from "../ControlInput/ControlInput";

interface FormUpdateCardProps {
	updatedIndex: number,
}

export const FormUpdateCard: FC<FormUpdateCardProps> = ({ updatedIndex }) => {
	const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>();
	const dispatch: AppDispatch = useDispatch();
	const { isLoadCreared, list } = useCustomState();

	const updatedCard = list.find(card => card.id === updatedIndex);

	const onSubmit: SubmitHandler<IFormInput> = (data) => {
		dispatch(updateCard({ ...data, id: updatedIndex }));
	};

	return (
		<form
			className="flex flex-col gap-7 w-full"
			onSubmit={handleSubmit(onSubmit)}
		>

			<ControlInput
				value={updatedCard?.title || ""}
				name="title"
				control={control}
				error={errors.title}
			/>

			<ControlInput
				value={updatedCard?.text || ""}
				name="text"
				control={control}
				error={errors.text}
			/>

			<ControlInput
				value={checkImageUrl(updatedCard?.image) || ""}
				name="image"
				control={control}
				error={errors.image}
			/>

			<ControlInput
				value={updatedCard?.url || ""}
				name="url"
				control={control}
				error={errors.url}
			/>

			<SubmitButton text="Update Card" isLoad={isLoadCreared} />
		</form>
	)
}
