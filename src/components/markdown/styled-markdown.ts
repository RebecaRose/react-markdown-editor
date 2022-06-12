import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 10px;
    padding: 10px;
    font-family: sans-serif;

    &:focus{
        border: 2px solid #51bbf6;
    }

    pre {
        background: #f3f3f3;
        border-radius: 3px;
        padding: 10px;
    }

    blockquote {
        margin: 0px;
        background: #f3f3f3;
        border-radius: 2px;
        border-left: 5px solid #c1bdbd;
        p {
            padding: 5px 5px 5px 15px;
        }
    }
`;

export const StyledMarkdownEditor = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: 0px -1px 3px 1px #7e7a7a;
    overflow: hidden;
`;

export const AppBar = styled.div`
    padding: 5px;
    background: #023346;
    color: #000;
    text-align: center;
    display: flex;
`;

export const MarkdownContent = styled.div`
    display: flex;
    justify-content: center;
`;

export const Editor = styled.div`
    flex: 1;
    border-right: 1px solid;
    padding-left: 2px;
    > div{
        height: 100%;
        > textarea {
            height: 100%;
        }
    }
`;

export const ShowMarkdown = styled.div`
    flex: 1;
    border-radius: 0;
    padding: 10px;

    img {
        width: 100%;
    }
`;
