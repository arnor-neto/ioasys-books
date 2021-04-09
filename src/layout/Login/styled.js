import styled from "styled-components";
import LoginBackground from "../../assets/LoginBackground.png";

export const BackgroundWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-image: url(${LoginBackground});
    background-size: cover;

    @media(max-width: 600px){
        background-position: center;
        justify-content: center;
        align-items: center;
    }
`

export const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 115px; 
    margin-top: 100px;

    @media(max-width: 600px){
        margin: 0;
        padding: 0;
        width: 90%;
    }
`