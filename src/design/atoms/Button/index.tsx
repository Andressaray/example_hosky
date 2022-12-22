import { ButtonProps } from "./index.t";
import getColor from "../../../utils/getColor";

const Button = ({ onClick, text, size = 'sm', bg='primary' }: ButtonProps) => {
	const color = getColor(bg)
	return (
		<button
			onClick={onClick}
			className={`${color} p-2 rounded-md hover:translate-y-1 hover:duration-200 hover:transition-all hover:scale-105 hover:animate-spin ${size === 'sm' ? 'w-44' : 'w-64'}`}
		>
			<p className="text-white font-bold">{text}</p>
		</button>
	);
};

export default Button;
