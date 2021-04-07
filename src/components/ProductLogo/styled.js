import styled from "styled-components";

export const LogoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const Image = styled.img`
    margin-right: 16.6px;
`

export const Text = styled.p`
    margin: 0;
    padding: 0;
    color: ${props => (props.color == 'white') ? '#ffffff' : '#333333'};
    font-size: 28px;
    font-weight: 300;
`