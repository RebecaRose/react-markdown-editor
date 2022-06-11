export type IconTypes = 'like' | 'liked' | 'lock' | 'share' | 'link' |
'facebook' | 'twitter' | 'instagram' | 'sun' | 'moon' | 'settings' | 'search' |
'user' | 'checked' | 'close' | 'edit' | 'ellipsis' | 'delete' | 'tags' |
'camera' | 'youtube' | 'notification' | 'plus' | 'bold' | 'italic' | 'copy' |
'listUl' | 'listOl' | 'quote' | 'heading' | 'check' | 'image' | 'images' |
'markdown' | 'line' | 'poll' | 'embed' | 'underline' | 'strikethrough' |
'highlight' | 'text' | 'faCheckCircle' | 'table' | 'checkbox' | 'code';

export interface IconProps {
    type: IconTypes;
    style?: React.CSSProperties;
}
