import React, {useState} from 'react';
import { Button, Modal, TextInput } from '..';
import { Content } from './models';
import styled from 'styled-components';

interface Props {
    open: boolean;
    content: Content[];
    updateValue: (name: string, value: string) => void;
    onClose: () => void;
    onContinue: () => void;
}

const MarkdownModal = (props: Props) => {
    const [values, setValues] = useState<any[]>(props.content);
    const handleKeyDown = (e: { charCode: number }) => {
        if (e.charCode == 13) {
            onContinue();
        } else if (e.charCode == 27) {
            props.onClose();
        }
    };

    const onContinue = () => {
        props.content.forEach((item, index) => {
            props.updateValue(item.name, values[index].value);
        })
        props.onContinue();
    }

    const onChange = (index: number, value: string) => {
        const myValues = [...values] as any[];
        myValues[index].value = value;
        setValues(myValues);
    }

    return(
        <Modal
            open={props.open}
            size='xs'
        >
            <Container
                onKeyPress={handleKeyDown}
            >
                {props.content.map((item, index) => (
                    <TextInput
                        fullWidth
                        name={item.name}
                        label={item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                        value={values[index].value}
                        onChange={e => onChange(index, e.target.value)}
                    />
                ))}
                <div>
                    <Button
                        style={{marginTop: 10, marginRight: 10}}
                        onClick={onContinue}
                    >
                        Continuar
                    </Button>
                    <Button
                        onClick={props.onClose}
                    >
                        Cancelar
                    </Button>
                </div>
            </Container>
        </Modal>
    );
};

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export default MarkdownModal;
