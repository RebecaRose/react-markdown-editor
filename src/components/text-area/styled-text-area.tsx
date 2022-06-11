import styled from 'styled-components';
import { TextAreaProps } from './text-area.types';

interface Props {
    fullWidth?: boolean;
}

const StyledContainer = styled.div<Props>`
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    width: 25ch;

    ${props =>
        props.fullWidth &&
    `
        width: 100%;
    `}
`;

const StyledTextArea = styled.textarea<TextAreaProps>`
    background: transparent;
    border-radius: 3px;
    color: #000;
    border: 1px solid #868686;
    outline: 0;
    ${ props => props.variant == 'transparent' &&`
        border: none;
    `}
`;

const StyledLabel = styled.label``;

export { StyledContainer, StyledTextArea, StyledLabel };
