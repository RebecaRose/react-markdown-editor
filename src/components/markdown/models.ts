
export interface MarkdownItem {
    icon: string;
    name: string;
    text?: string;
    type: 'start-end' | 'start-only' | 'single-block' | 'other';
    value: string;
    helperValue?: string;
    requireValues?: string[];
    shortcut?: number;
    expression?: string;
}

export interface Selected {
    value: string;
    start: number;
    end: number;
}

export interface Content {
    name: string;
    value: string;
}

export interface MarkdownModal {
    open: boolean;
    content: Content[];
    item?: MarkdownItem;
}