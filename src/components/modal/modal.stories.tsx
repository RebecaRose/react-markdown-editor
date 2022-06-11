import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Modal } from './index';
import { ModalProps } from "./modal.types"

export default {
    title: 'Components/Modal',
    component: Modal,
    argTypes: {},
} as Meta<typeof Modal>;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const Teste = Template.bind({});
Teste.args = {
    open: true,
    size: 'md',
    children: 'Allons-y'
};