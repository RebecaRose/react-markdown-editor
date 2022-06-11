import styled from 'styled-components';
import { colors } from '../colors';

interface Props {
    open: boolean;
    alignCenter?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

function getMaxWidth(size?: string){
    switch(size){
    case 'xs':
        return '575px';
    case 'sm':
        return '767px';
    case 'md':
        return '991px';
    case 'lg':
        return '1200px';
    case 'xl':
        return '1700px';
    default:
        return '575px';
    }
}

const StyledModal = styled.div<Props>` 
    ${props => props.open &&
        `
        animation: moveUp .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
        `
}
    ${props => !props.open &&
        `
        animation: moveDown .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
        `
}
    ${props => props.alignCenter &&
        `
        display: flex;
        align-items: center;
        justify-content: center;
        `
}

    position: absolute;
    display: flex;
    background: #fff;
    border: 2px solid ${colors.primary};
    color: #000;
    box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    box-sizing: border-box;
    padding: 20px;
    min-width: 200px;
    width: 100%;
    min-height: 200px;
    max-height: 90%;
    overflow: auto;
    max-width: ${props => getMaxWidth(props.size)};

    @keyframes moveUp {
        0% {
            transform: translateY(1500px);
        }
        100% {
            transform: translateY(0);
        }
    }
 
    @keyframes moveDown {
        0% {
            transform: translateY(0px);
        }
        100% {
            transform: translateY(1500px);
        }
    }
`;

const StyledModalBackground = styled.div<Props>` 
    ${props => props.open &&
        `
        opacity: 1;
        visibility: visible;
        transform: scale(1);
        transition: visibility 0s linear 200ms, opacity 200ms 0s, transform 200ms;
        `
}

    ${props => !props.open &&
        `
        visibility: hidden;
        transition: visibility 0s linear .5s, opacity .5s 0s, transform .5s;
        `
}
    
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(52, 41, 55, 0.5);
    z-index: 999999;
    overflow: hidden;

`;

export { StyledModal, StyledModalBackground };