
export interface TextAreaProps {
    label?: React.ReactNode;
    name: string;
    value?: string;
    onChange: (e: { target: { value: string } }) => void;
    fullWidth?: boolean;
    placeholder?: string;
    variant: 'outlined' | 'contained' | 'transparent';
    style?: React.CSSProperties;
    rows?: number;
    onSelect?: (e: { target: { value: string } }) => void;
}
