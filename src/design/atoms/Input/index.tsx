import { InputProps } from "./index.t";

const Input = ({ name, onChange, placeholder, text, type = "text" }: InputProps) => {
  return (
    <input
      name={name}
      className="p-2 rounded-md outline-blue-500 border-2 border-blue-400"
      onChange={(v) => onChange(v.target.value)}
      value={text}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
