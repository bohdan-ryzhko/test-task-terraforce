import { FC } from "react";
import { Control, Controller, FieldError } from "react-hook-form";
import { IFormInput } from "../../interfaces/IFormInput";

type NameInput = "title" | "image" | "text" | "url";

interface ControllInputProps {
	value: string,
	name: NameInput,
	control: Control<IFormInput, any>,
	error: FieldError | undefined,
}

export const ControlInput:FC<ControllInputProps> = ({ value, control, name, error }) => {
	return (
		<>
			<Controller
				defaultValue={value}
				name={name}
				control={control}
				rules={{ required: true }}
				render={({ field }) => <label
					className="relative"
					htmlFor={value}
				>
					<input
						id={value}
						className="border border-black rounded-md w-full p-2"
						{...field}
					/>
					{
						error &&
						<p
							className="absolute left-0 text-xs text-red-600 font-medium">
							{value} field is required
						</p>
					}
				</label>
				}
		/>
		</>
	)
}
