import React from 'react';
import { StyledInputContainer, StyledTextInput, StyledLabel, StyledInputError } from './styled-text-input';
import { TextInputProps } from './text-input.types';

export const TextInput = (props: TextInputProps) => (
    <StyledInputContainer
        onKeyPress={props.onKeyPress}
        style={props.style}
        fullWidth={props.fullWidth}
        ref={props.ref}
    >
        {props.label &&
            <StyledLabel
                htmlFor={props.name}
                error={props.error}
            >
                {props.label}
            </StyledLabel>
        }
        <StyledTextInput
            id={props.name}
            inputSize={props.size}
            name={props.name}
            type={props.type}
            value={props.value}
            error={props.error}
            variant={props.variant}
            onChange={props.onChange}
            onSelect={props.onSelect}
            placeholder={props.placeholder}
            readOnly={props.readOnly}
        />
        <StyledInputError>
            {props.error}
        </StyledInputError>
    </StyledInputContainer>
);

TextInput.defaultProps = {
    size: 'md',
    type: 'text',
    variant: 'outlined',
};
