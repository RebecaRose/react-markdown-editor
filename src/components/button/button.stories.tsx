import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button } from './index';
import { ButtonProps } from "./button.types"

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {},
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    color: 'secondary',
    title: "Secondary",
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    title: 'Disabled',
};

export const Small = Template.bind({});
Small.args = {
    size:"sm",
    title: 'Small',
};
