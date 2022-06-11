import { Colors } from "../colors";

export interface ButtonProps {
    color: Colors;
    size: "sm" | "md" | "lg";
    variant: "outlined" | "contained";
    title?: string;
    children?: React.ReactNode;
    onClick: () => void;
    style?: React.CSSProperties;
    fullWidth?: boolean;
    disabled?: boolean;
}
