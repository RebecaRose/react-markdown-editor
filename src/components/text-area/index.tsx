import React from 'react';
import {
    StyledContainer,
    StyledLabel,
    StyledTextArea,
} from './styled-text-area';
import { TextAreaProps } from './text-area.types';

export const TextArea = (props: TextAreaProps) => (
    <StyledContainer
        fullWidth={props.fullWidth}
        style={props.style}
    >
        <StyledLabel
            htmlFor={props.name}
        >
            {props.label}
        </StyledLabel>
        <StyledTextArea {...props}/>
    </StyledContainer>
);

TextArea.defaultProps = {
    variant: 'outlined',
};
