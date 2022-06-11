import styled from 'styled-components';
import { colors, Colors } from '../colors';

const sizes = {
    sm: '20px',
    md: '30px',
    lg: '40px',
};

interface Props {
    color: Colors;
    size: 'sm' | 'md' | 'lg';
    variant: 'outlined' | 'contained';
    round?: boolean;
    fullWidth?: boolean;
}

function getDefaultColor(type: 'font' | 'hover', color: string) {
    let red = 0;
    let green = 0;
    let blue = 0;

    if (color.indexOf('#') != -1) {
        red = parseInt(color.substr(1, 2), 16);
        green = parseInt(color.substr(3, 2), 16);
        blue = parseInt(color.substr(5, 2), 16);
    } else if (color.indexOf('rgb') != -1) {
        const array = color.substr(4).replace(')', '').split(',');
        red = parseInt(array[0]);
        green = parseInt(array[0]);
        blue = parseInt(array[0]);
    } else {
    }

    if (red * 0.299 + green * 0.587 + blue * 0.114 > 186) {
        if (type === 'hover') {
            return `rgb(${red * 0.8}, ${green * 0.8}, ${blue * 0.8})`;
        }
        return '#000';
    }
    if (type === 'hover') {
        return `rgb(${red * 1.2}, ${green * 1.2}, ${blue * 1.2})`;
    }
    return '#fff';
}

const StyledButton = styled.button<Props>`
    color: ${props => props.variant === 'outlined' ? colors[props.color]: getDefaultColor('font', colors[props.color])};
    height: ${props => sizes[props.size]};
    background: ${props => props.variant === 'outlined' ? getDefaultColor('font', colors[props.color]) : colors[props.color]};
    border: 1px solid ${props => colors[props.color]};
    border-radius: ${props => props.round ? '100px' : '3px'};
    width: ${props => props.fullWidth ? '100%' : ''};

    &:hover {
        cursor: pointer;
        opacity: 0.8;
        border: ${props => props.variant !== 'outlined' ? `1px solid ${colors[props.color]}` : 'none'};
        color: ${props => props.variant === 'outlined' ? getDefaultColor('font', colors[props.color]) : colors[props.color]};
        background: ${props => props.variant === 'outlined' ? colors[props.color]: getDefaultColor('font', colors[props.color])};
    }

    &:focus {
        outline: 0;
    }

    &:active {
        transform: scale(0.95);
        &:disabled {
            transform: scale(1);
        }
    }

    &:disabled,
    &:disabled:hover {
        opacity: 1;
        color: #f8e9e9;
        background: gray;
        cursor: not-allowed;
        border: 1px solid gray;
    }
`;

export default StyledButton;
