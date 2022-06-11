
export interface TextInputProps {
    label?: React.ReactNode;
    name: string;
    size: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    variant: 'outlined' | 'contained' | 'transparent';
    value?: string | number;
    onChange: (e: { target: { value: string} }) => void;
    type: 'text' | 'number' | 'password' | 'date';
    error?: string;
    placeholder?: string;
    onKeyPress?: any;
    style?: React.CSSProperties;
    onSelect?: any;
    fullWidth?: boolean;
    ref?: any;
    readOnly?: boolean;
}
