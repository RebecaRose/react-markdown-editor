import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 10px;
    padding: 10px;

    &:focus{
        border: 2px solid #51bbf6;
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
    padding-left: 2px;

    img {
        width: 100%;
    }
`;
