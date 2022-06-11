import { Colors } from "../colors";
import { IconTypes } from "../icon/icon.types";

export interface IconButtonProps {
    id?: string;
    ref?: any;
    color: Colors;
    icon: IconTypes;
    text?: string;
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    onClick?: () => void;
    variant: 'transparent' | 'outlined' | 'contained';
    style?: React.CSSProperties;
}
