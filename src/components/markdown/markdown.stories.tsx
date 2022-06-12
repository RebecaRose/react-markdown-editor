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

export const Example = Template.bind({});
Example.args = {
    value: '# Hello World',
};