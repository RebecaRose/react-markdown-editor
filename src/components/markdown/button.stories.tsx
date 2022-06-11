import React from 'react';
import { Story, Meta } from '@storybook/react';

import { MarkdownEditor } from './index';
import { MarkdownEditorProps } from "./markdown.types"

export default {
    title: 'Components/MarkdownEditor',
    component: MarkdownEditor,
    argTypes: {},
} as Meta<typeof MarkdownEditor>;

const Template: Story<MarkdownEditorProps> = (args) => <MarkdownEditor {...args} />;

export const Teste = Template.bind({});
Teste.args = {
    showOnly: true,
    value: 'Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.',
};