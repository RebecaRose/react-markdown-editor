import styled from 'styled-components';

const sizes = {
    sm: {
        height: '20px',
        fontSize: '12px',
    },
    md: {
        height: '30px',
        fontSize: '14px',
    },
    lg: {
        height: '40px',
        fontSize: '16px',
    },
    xl: {
        height: '50px',
        fontSize: '18px',
    },
    xxl: {
        height: '60px',
        fontSize: '20px',
    },
};

interface Props {
    inputSize: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    name: string;
    onChange: (e: { target: { value: string} }) => void;
    error?: string;
    variant: 'outlined' | 'contained' | 'transparent';
}

interface ContainerProps {
    fullWidth?: boolean;
}

interface LabelProps {
    error?: string;
}

const StyledTextInput = styled.input<Props>` 
    height: ${props => sizes[props.inputSize].height};
    font-size: ${props => sizes[props.inputSize].fontSize};
    border: 1px solid ${props => props.error ? 'red' : '#868686'};
    background: transparent;
    color: #000;
    ${props => props.error && 'color: red'};
    border-radius: 3px;
    outline: 0;
    ${ props => props.variant == 'transparent' && `
        border: none;
    `}
`;

const StyledLabel = styled.label<LabelProps>` 
    ${props => props.error && 'color: red'};
`;

const StyledInputContainer = styled.div<ContainerProps>`
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    width: 25ch;

    ${props => props.fullWidth && `
        width: 100%;
    `}
`;

const StyledInputError = styled.div`
    color: red;
    font-size: 12px;
`;

export { StyledTextInput, StyledLabel, StyledInputContainer, StyledInputError};
