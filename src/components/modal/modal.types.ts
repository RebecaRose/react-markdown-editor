
export interface ModalProps {
    children: React.ReactNode;
    open: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    onClose?: () => void;
    alignCenter?: boolean;
}
