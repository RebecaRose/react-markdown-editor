import styled from 'styled-components';
import { colors, Colors } from '../colors';
import { IconButtonProps } from './icon-button.types';
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type Variant = 'transparent' | 'outlined' | 'contained';

const sizes = {
    xs: 10,
    sm: 15,
    md: 20,
    lg: 25,
    xl: 30,
    xxl: 35,
};

const getSize = (size: Size, variant: Variant) => {
    let mySize = sizes[size];
    mySize = mySize * 2;
    return `${mySize}px`;
};

const getBackground = (props: IconButtonProps, hover?: boolean) => {
    const { variant, color } = props;
    if(hover){
        if(variant === 'contained') return 'transparent';
        return colors[color];
    }
    if(variant === 'contained') return colors[color];
    return 'transparent';
}

export const StyledIconButton = styled.button<IconButtonProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #ddd1d1;
    font-weight: bold;
    margin-left: 10px;
    padding: 0px;
    border-radius: 57px;
    width: ${ props => getSize(props.size, props.variant)};
    height: ${ props => getSize(props.size, props.variant)};
    font-size: ${ props => `${sizes[props.size]}px`};
    background: ${props => getBackground(props)};
    border: ${props => props.variant === 'transparent' ? 'none' : `1px solid ${colors[props.color]}`};

    > span {
        font-size: ${ props => `${sizes[props.size] * 1.25}px`};
    }

    /* box-shadow: 1px 1px 6px 1px #000000;*/

    &:hover{
        cursor: pointer;
        opacity: 0.8;
        background: ${props => getBackground(props, true)};
    }

    &:focus {
        outline: 0;
    }

    &:active {
        transform: scale(0.95);
    }
`;
