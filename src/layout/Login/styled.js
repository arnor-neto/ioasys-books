import styled from "styled-components";
import background from "../../assets/Background.png";

export const BackgroundWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-image: url(${background});
    background-size: cover;
`

export const LoginWrapper = styled.div`
    display: flex;
    padding-left: 115px;
`