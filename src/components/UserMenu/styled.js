import styled from "styled-components";
import LogoutIcon from "../../assets/LogoutIcon.png";

export const MenuWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const WelcomeText = styled.p`
    margin: 0;
    font-size: 12px;
    font-weight: 400;
    margin-right: 16px;
    color: #333333;
`

export const UsernameText = styled.strong`
    margin: 0;
    font-size: 12px;
    font-weight: 500;
    color: #333333;
`

export const LogoutButton = styled.div`
    cursor: pointer;
    border: 1px solid rgba(51, 51, 51, 0.2);
    outline: none;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    
    background: rgba(0, 0, 0, 0);
    background-image: url(${LogoutIcon});
    background-repeat: no-repeat;
    background-position:center;
`