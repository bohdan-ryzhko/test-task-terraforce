import { FC } from "react";
import { FieldError, Path, UseFormRegister } from "react-hook-form";
import { IFormInput } from "../../interfaces/IFormInput";

type InputProps = {
	id: Path<IFormInput>;
	register: UseFormRegister<IFormInput>;
	placeholder: string,
	required: boolean;
	error: FieldError | undefined,
};

export const Input: FC<InputProps> = ({ id, placeholder, register, required, error }) => (
	<>
		<label
			className="relative"
			htmlFor={id}>
			<input
				className="border border-black rounded-md w-full p-2"
				type="text"
				placeholder={placeholder}
				{...register(id, { required })} />
			{
				error &&
				<p
					className="absolute left-0 text-xs text-red-600 font-medium">
					{placeholder} field is required
				</p>
			}
		</label>
	</>
)
