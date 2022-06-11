import { MarkdownModal, MarkdownItem, Selected } from './models';

export const insertMarkdown = (oldValue: string, newValue: string, selected: Selected) => {
    const selectStart = selected.start;
    const selectEnd = selected.end;
    const after = oldValue.substring(0, selectStart);
    const before = oldValue.substring(selectEnd);
    return after + newValue + before;
};

export const newMarkdownModal = (item: MarkdownItem, modal: MarkdownModal) => {
    let markdownModal = modal;
    item.requireValues?.forEach(subItem => {
        markdownModal.content.push({
            name: subItem,
            value: '',
        });
    });
    markdownModal.item = item;
    markdownModal.open = true;
    return markdownModal;
};

export const toggleMarkdown = (currentValue: string, item: MarkdownItem, selected: Selected, modal: MarkdownModal ) => {
    let value = '';
    if (item.type === 'single-block') {
        if (!item.requireValues) {
            value = item.value;
        } else {
            const newModal = newMarkdownModal(item, modal);
            return {
                type: 'modal',
                data: newModal
            }
        }
    } else if (item.type === 'start-end') {
        value = `${item.value}${selected.value}${item.value}`;
    } else if (item.type === 'start-only') {
        value = `${item.value} ${selected.value}`;
    }
    return {
        type: 'value',
        data: insertMarkdown(currentValue, value, selected),
    };
};

export const onContinueMarkdownModal = (markdownModal: MarkdownModal, selected: Selected) => {
    let value = markdownModal.item?.value;
    const content = markdownModal.content;
    if (!markdownModal.item?.expression && value) {
        content.forEach(subItem => {
            const regex = new RegExp(`${subItem.name.toUpperCase()}`, 'g');
            if(value) value = value.replace(regex, subItem.value);
        });
        return {
            type: 'value',
            data: value,
        }
    } else {
        const item = markdownModal.item;
        if(!item) return;
        const expression = item.expression;
        const helperValue = item.helperValue;
        let newValue = expression;
        const getValue = (validate: string) => {
            if (validate === 'VALUE') {
                return value;
            } else if (validate === 'HELPERVALUE') {
                return helperValue;
            }
            const myContentItem = content.find(contentItem => contentItem.name === validate.toLowerCase());
            if (myContentItem) {
                return myContentItem.value;
            }
            return validate;
        };
        if(!newValue) return;
        do {
            const list = newValue.match(/\([ a-zA-Z0-9-+*-|]*\)/g);
            if (list === null) return;
            list.forEach(subExpression => {
                const operator = subExpression.match(/[-+*-/]/g);
                if(operator === null || !operator) return;
                const operatorIndex = subExpression.indexOf(operator[0]);
                const firstOperator = getValue(subExpression.substring(0, operatorIndex).replace(/[ (]/g, ''));
                const secondOperator = getValue(subExpression.substring(operatorIndex).replace(/[ -*-+/)]/g, ''));
                let replaceValue = '';
                switch (operator[0]) {
                    case '*':
                        if(!firstOperator || !secondOperator) return;
                        if (isNaN(parseInt(firstOperator)) && !isNaN(parseInt(secondOperator))) {
                            replaceValue = firstOperator.repeat(parseInt(secondOperator));
                        } else if (!isNaN(parseInt(firstOperator)) && isNaN(parseInt(secondOperator))) {
                            replaceValue = secondOperator.repeat(parseInt(firstOperator));
                        } else if (!isNaN(parseInt(firstOperator)) && !isNaN(parseInt(secondOperator))) {
                            replaceValue = firstOperator + secondOperator;
                        } else {
                            replaceValue = (parseInt(firstOperator) * parseInt(secondOperator)).toString();
                        }
                        break;
                    case '+':
                        if(!firstOperator || !secondOperator) return;
                        if (isNaN(parseInt(firstOperator)) && isNaN(parseInt(secondOperator))) {
                            replaceValue = firstOperator + secondOperator;
                        } else if (!isNaN(parseInt(firstOperator)) && !isNaN(parseInt(secondOperator))) {
                            replaceValue = (parseInt(firstOperator) + parseInt(secondOperator)).toString();
                        }
                        break;
                    case '-':
                        if(!firstOperator || !secondOperator) return;
                        if (isNaN(parseInt(firstOperator)) && isNaN(parseInt(secondOperator))) {
                            replaceValue = firstOperator + secondOperator;
                        } else if (!isNaN(parseInt(firstOperator)) && !isNaN(parseInt(secondOperator))) {
                            replaceValue = (parseInt(firstOperator) - parseInt(secondOperator)).toString();
                        }
                        break;
                    case '/':
                        if(!firstOperator || !secondOperator) return;
                        if (!isNaN(parseInt(firstOperator)) && !isNaN(parseInt(secondOperator))) {
                            replaceValue = (parseInt(firstOperator) / parseInt(secondOperator)).toString();
                        }
                        break;
                }
                if(newValue) newValue = newValue.replace(subExpression, replaceValue);
            });
        } while (newValue.indexOf('(') != -1);
        const myList = [{ name: 'helpervalue', value: helperValue}, {name: 'value', value}, ...content] as any[];
        myList.map(subItem => {
            const regex = new RegExp(`${subItem.name.toUpperCase()}`, 'g');
            if(newValue) newValue = newValue.replace(regex, subItem.value);
        });
        value = newValue;
        return {
            type: 'value',
            data: value,
        }
    }
    // insertMarkdown(selected.value, value, selected);
};

export const getItems = () => {
    return [
        {
            icon: 'bold',
            name: 'bold',
            type: 'start-end',
            value: '**',
            shortcut: 66,
        },
        {
            icon: 'strikethrough',
            name: 'strikethrough',
            type: 'start-end',
            value: '~~',
        },
        {
            icon: 'italic',
            name: 'italic',
            type: 'start-end',
            value: '*',
            shortcut: 73,
        },
        {
            icon: 'quote',
            name: 'quote',
            type: 'start-only',
            value: '>',
        },
        {
            icon: 'code',
            name: 'code',
            type: 'start-end',
            value: '```',
            shortcut: 75,
        },
        {
            icon: 'listUl',
            name: 'listUl',
            type: 'start-only',
            value: '-',
        },
        {
            icon: 'listOl',
            name: 'listOl',
            type: 'start-only',
            value: '1.',
        },
        {
            icon: 'line',
            name: 'line',
            type: 'single-block',
            shortcut: 72,
            value: `
 ------------`,
        },
        {
            icon: 'heading',
            name: 'h1',
            text: '1',
            type: 'start-only',
            value: '#',
            shortcut: 49,
        },
        {
            icon: 'heading',
            name: 'h2',
            text: '2',
            type: 'start-only',
            value: '##',
            shortcut: 50,
        },
        {
            icon: 'heading',
            name: 'h3',
            text: '3',
            type: 'start-only',
            value: '###',
            shortcut: 51,
        },
        {
            icon: 'heading',
            name: 'h4',
            text: '4',
            type: 'start-only',
            value: '####',
            shortcut: 52,
        },
        {
            icon: 'heading',
            name: 'h5',
            text: '5',
            type: 'start-only',
            value: '#####',
            shortcut: 53,
        },
        {
            icon: 'heading',
            name: 'h6',
            text: '6',
            type: 'start-only',
            value: '######',
            shortcut: 54,
        },
        {
            icon: 'image',
            name: 'image',
            type: 'single-block',
            value: '[![TITLE](ADDRESS "TITLE")](LINK "TITLE")',
            requireValues: ['address', 'title', 'link'],
        },
        {
            icon: 'link',
            name: 'link',
            type: 'single-block',
            value: '[TITLE](LINK "TITLE")',
            requireValues: ['link', 'title'],
            shortcut: 76,
        },
        {
            icon: 'table',
            name: 'table',
            type: 'single-block',
            requireValues: ['rows', 'cols'],
            value: '|',
            helperValue: '| ------ | ----- |',
            expression: `
(VALUE + (VALUE * COLS))
HELPERVALUE
((VALUE + (VALUE * COLS)) * (ROWS - 1))
`,
        },
        {
            icon: 'checkbox',
            name: 'checkbox',
            type: 'start-only',
            value: '- [ ]',
        },
    ] as MarkdownItem[]
}
