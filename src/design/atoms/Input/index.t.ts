import { HTMLInputTypeAttribute } from "react";

export interface InputProps {
    name: string;
    text: string;
    onChange: (v:string) => void;
    placeholder: string;
    type: HTMLInputTypeAttribute
}