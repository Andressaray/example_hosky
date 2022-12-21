export interface ButtonProps {
    onClick: (e: any) => void;
    text: string;
    size?: 'sm' | 'md';
    bg?: 'primary' | 'danger' | 'purple';
}