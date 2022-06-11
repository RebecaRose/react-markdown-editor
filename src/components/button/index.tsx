import React from 'react';
import StyledButton from "./styled-button";
import { ButtonProps } from "./button.types";

export const Button = (props: ButtonProps) => {
    return (
        <StyledButton
            variant={props.variant}
            size={props.size}
            color={props.color}
            onClick={props.onClick}
            style={props.style}
            fullWidth={props.fullWidth}
            disabled={props.disabled}
        >
            {props.children || props.title}
        </StyledButton>
    )
}

Button.defaultProps = {
    color: "primary",
    size: "md",
    variant: "contained",
};
