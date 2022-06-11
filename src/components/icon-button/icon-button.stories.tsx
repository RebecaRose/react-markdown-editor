import React from 'react';
import { Story, Meta } from '@storybook/react';

import { IconButton } from './index';
import { IconButtonProps } from "./icon-button.types"

export default {
    title: 'Components/IconButton',
    component: IconButton,
    argTypes: {},
} as Meta<typeof IconButton>;

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />;

export const Transparent = Template.bind({});
Transparent.args = {
    icon: 'delete',
    text: "Transparent",
};

export const Contained = Template.bind({});
Contained.args = {
    icon: 'notification',
    text: 'Contained',
    variant: 'contained'
};

export const Outlined = Template.bind({});
Outlined.args = {
    icon: 'code',
    text: "Outlined",
    variant: 'outlined'
};
