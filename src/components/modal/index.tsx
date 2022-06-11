import React from 'react';
import { ModalProps } from './modal.types';
import { StyledModal, StyledModalBackground } from './styled-modal';

export const Modal = (props: ModalProps) => (
    <StyledModalBackground
        open={props.open}
        onClick={props.onClose}
    >
        <StyledModal
            alignCenter={props.alignCenter}
            open={props.open}
            size={props.size}
        >
            {props.children}
        </StyledModal>
    </StyledModalBackground>
);
