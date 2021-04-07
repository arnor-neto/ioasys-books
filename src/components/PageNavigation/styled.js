import styled from "styled-components";
import ArrowNext from "../../assets/ArrowNext.png";
import ArrowPrev from "../../assets/ArrowPrev.png";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
export const Text = styled.p`
    margin: 0;
    font-size: 12px;
    font-weight: 400;
    color: #333333;
    margin-right: 16px;
`
export const Number = styled.strong`
    margin: 0;
    font-size: 12px;
    font-weight: 500;
    color: #333333;
`

export const PrevButton = styled.button`
    cursor: ${props => props.firstPage? '' : 'pointer'};
    border: 1px solid rgba(51, 51, 51, 0.2);
    outline: none;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    margin-right: 8px;
    
    background: rgba(0, 0, 0, 0);
    background-image: url(${ArrowPrev});
    background-repeat: no-repeat;
    background-position:center;
    opacity: ${props => props.firstPage? 0.4 : 1}
`

export const NextButton = styled.button`
    cursor: ${props => props.lastPage? '' : 'pointer'};
    border: 1px solid rgba(51, 51, 51, 0.2);
    outline: none;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    margin-right: 8px;
    
    background: rgba(0, 0, 0, 0);
    background-image: url(${ArrowNext});
    background-repeat: no-repeat;
    background-position:center;
    opacity: ${props => props.lastPage? 0.4 : 1}
`