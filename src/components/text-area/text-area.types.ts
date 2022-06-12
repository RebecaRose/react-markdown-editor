import React from 'react';
import { SyntheticEvent } from 'react';
import { ChangeEvent } from "react";

export interface TextAreaProps {
    label?: React.ReactNode;
    name: string;
    value?: string;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    fullWidth?: boolean;
    placeholder?: string;
    variant: 'outlined' | 'contained' | 'transparent';
    style?: React.CSSProperties;
    rows?: number;
    onSelect?: (e: SyntheticEvent<HTMLTextAreaElement, Event>) => void;
}
