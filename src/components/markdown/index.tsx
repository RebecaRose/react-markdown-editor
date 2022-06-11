import { IconButton, TextArea } from '..';
import React from 'react';
import marked from 'marked';
import MarkdownModal from './markdown-modal';
import { Content } from './models';
import { Container, MarkdownContent, ShowMarkdown, AppBar, StyledMarkdownEditor, Editor } from './styled-markdown';
import { getItems, toggleMarkdown, onContinueMarkdownModal, insertMarkdown } from './functions';
import { useState } from 'react';
import { MarkdownEditorProps } from './markdown.types';
import { MarkdownModal as ModalType, MarkdownItem, Selected } from './models';

export const MarkdownEditor = (props: MarkdownEditorProps) => {
    const [value, setValue] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalItem, setModalItem] = useState<Content>();
    const [modalContent, setModalContent] = useState<Content[]>([]);
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedStart, setSelectedStart] = useState(0);
    const [selectedEnd, setSelectedEnd] = useState(0);
    const items = getItems();

    const renderText = (text: any) => {
        if(text){
            const __html = marked(text, { sanitize: true });
            return { __html };
        }
        return { __html: '' };
    };

    if(!window){
        return <div></div>;
    }

    if(props.showOnly){
        return <ShowMarkdown dangerouslySetInnerHTML={renderText(props.value)}/>;
    }

    const handleKeyDown = (e: { keyCode: number, ctrlKey: boolean}) => {
        if (e.ctrlKey){
            items.filter( item => item.shortcut).forEach( item => {
                if(e.keyCode === item.shortcut){
                    // store.toggleMarkdown(item);
                }
            });
        }
    };

    const onCloseMarkdownModal = () => {
        setIsModalOpen(false);
        setModalContent([]);
        setModalItem(undefined);
    };

    const updateMarkdownModalContent = (name: string, value: string) => {
        let item = modalContent.find(item => item.name === name);
        if(!item) return;
        item.value = value;
        setModalItem(item);
    }

    const updateSelected = (e: { target: { value: string, selectionStart: number, selectionEnd: number } }) => {
        const start = e.target.selectionStart;
        const end = e.target.selectionEnd;
        const value = e.target.value.substring(start, end);
        setSelectedValue(value);
        setSelectedStart(start);
        setSelectedEnd(end);
    }

    const onToggleMarkdown = (item: MarkdownItem, selected: Selected, modal: ModalType) => {
        const response = toggleMarkdown(value, item, selected, modal) as any;
        if(response.type === 'modal'){
            setIsModalOpen(true);
            setModalItem(response.data.item);
            setModalContent(response.data.content);
            return;
        }
        const newValue = response.data;
        if(typeof newValue === 'string') setValue(newValue);
    }

    const onContinue = () => {
        const markdownModal = {
            open: true,
            item: modalItem,
            content: modalContent,
        } as any;
        const selected = {
            value: selectedValue,
            start: selectedStart,
            end: selectedEnd,
        }
        const response = onContinueMarkdownModal(markdownModal, selected) as any;
        if(response.type === 'value'){
            setIsModalOpen(false);
            const newValue = insertMarkdown(value, response.data, selected)
            setValue(newValue);
        }
    }

    return (
        <Container onKeyDown={handleKeyDown}>
            <MarkdownModal
                open={isModalOpen}
                content={modalContent}
                updateValue={updateMarkdownModalContent}
                onContinue={onContinue}
                onClose={onCloseMarkdownModal}
            />
            <StyledMarkdownEditor>
                <AppBar>
                    {items.map( item => (
                        <IconButton
                            icon={item.icon}
                            text={item.text}
                            size='sm'
                            onClick={() => onToggleMarkdown(
                                item,
                                {
                                    value: selectedValue,
                                    start: selectedStart,
                                    end: selectedEnd
                                },
                                {
                                    open: isModalOpen,
                                    item: modalItem,
                                    content: modalContent
                                }
                            )}
                        />
                    ))}
                </AppBar>
                <MarkdownContent>
                    <Editor>
                        <TextArea
                            style={{marginTop: 0}}
                            name='teste'
                            onChange={(e: any) => setValue(e.target.value)}
                            value={value}
                            rows={36}
                            onSelect={updateSelected}
                            fullWidth
                            variant='transparent'
                        />
                    </Editor>
                    <ShowMarkdown
                        dangerouslySetInnerHTML={renderText(value)}
                    />
                </MarkdownContent>
            </StyledMarkdownEditor>
        </Container>
    );
};

MarkdownEditor.defaultProps = {
    showOnly: false,
}
