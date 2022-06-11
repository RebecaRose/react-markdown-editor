
export const colors = {
    primary: '#2b4952',
    secondary: 'blue',
    tertiary: 'green'
} as ColorsType;

interface ColorsType {
    primary: string;
    secondary: string;
    tertiary: string;
}

export type Colors = 'primary' | 'secondary';

