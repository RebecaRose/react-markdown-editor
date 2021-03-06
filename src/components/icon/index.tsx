import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faLock, faShareSquare, faStar, faSun, faMoon, faCog, faSearch, faUserCircle, faCheck, faTimesCircle, faEdit, faEllipsisV, faTrash, faTags, faCamera, faBell, faPlus, faBold, faItalic, faListUl, faListOl, faQuoteLeft, faHeading, faWindowMinimize, faTasks, faExternalLinkAlt, faUnderline, faStrikethrough, faHighlighter, faTable, faCode } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle, faCheckSquare, faCopy, faImage, faImages, faKeyboard, faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faFacebookSquare, faInstagram, faMarkdown, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { IconProps } from './icon.types';

const icons = {
    like: farStar,
    liked: faStar,
    lock: faLock,
    share: faShareSquare,
    link: faLink,
    facebook: faFacebookSquare,
    twitter: faTwitter,
    instagram: faInstagram,
    sun: faSun,
    moon: faMoon,
    settings: faCog,
    search: faSearch,
    user: faUserCircle,
    checked: faCheck,
    close: faTimesCircle,
    edit: faEdit,
    ellipsis: faEllipsisV,
    delete: faTrash,
    tags: faTags,
    camera: faCamera,
    youtube: faYoutube,
    notification: faBell,
    plus: faPlus,
    bold: faBold,
    italic: faItalic,
    copy: faCopy,
    listUl: faListUl,
    listOl: faListOl,
    quote: faQuoteLeft,
    heading: faHeading,
    check: faCheckCircle,
    image: faImage,
    images: faImages,
    markdown: faMarkdown,
    line: faWindowMinimize,
    poll: faTasks,
    embed: faExternalLinkAlt,
    underline: faUnderline,
    strikethrough: faStrikethrough,
    highlight: faHighlighter,
    text: faKeyboard,
    faCheckCircle: faCheckCircle,
    table: faTable,
    checkbox: faCheckSquare,
    code: faCode,
};

const colors = {
    like: '#a99d9d',
    liked: '#e2e26c',
    lock: '#ddd1d1',
    share: '#a99d9d',
    link: '#ddd1d1',
    facebook: '#3b5998',
    twitter: '#1DA1F2',
    instagram: '#C13584',
    sun: '#f0f011',
    moon: '#ebebbe',
    settings: '#ddd1d1',
    search: '#ddd1d1',
    user: '#fff',
    checked: '#ddd1d1',
    close: '#ddd1d1',
    edit: '#ddd1d1',
    ellipsis: '#ddd1d1',
    delete: '#ddd1d1',
    tags: '#ddd1d1',
    camera: '#ddd1d1',
    youtube: '#c4302b',
    notification: '#ddd1d1',
    plus: '#ddd1d1',
    bold: '#ddd1d1',
    italic: '#ddd1d1',
    copy: '#ddd1d1',
    listUl: '#ddd1d1',
    listOl: '#ddd1d1',
    quote: '#ddd1d1',
    heading: '#ddd1d1',
    check: '#ddd1d1',
    image: '#bb3737',
    images: '#1e929b',
    markdown: '#418812',
    line: '#be5e0f',
    poll: '#be0f61',
    embed: '#382872',
    underline: '#ddd1d1',
    strikethrough: '#ddd1d1',
    highlight: '#ddd1d1',
    text: '#ddd1d1',
    faCheckCircle: '#3b692d',
    table: '#ddd1d1',
    checkbox: '#ddd1d1',
    code: '#ddd1d1',
};

export const Icon = (props: IconProps) => (
    <FontAwesomeIcon
        icon={icons[props.type]}
        style={{
            color: colors[props.type],
            ...props.style,
        }}
    />
);
