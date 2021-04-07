import styled from "styled-components";

export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 50px;
`

export const FieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 368px;
    height: 60px;
    background: rgba(0, 0, 0, 0.32);
    backdrop-filter: blur(2px);
    border-radius: 4px;
`

export const ButtonFieldWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 368px;
    height: 60px;
    background: rgba(0, 0, 0, 0.32);
    backdrop-filter: blur(2px);
    border-radius: 4px;
    margin-top: 16px;
`

export const PasswordWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const FieldLabel = styled.label`
    font-size: 12px;
    font-weight: 400;
    color: white;
    opacity: 0.5;
    padding: 8px 0 0 16px;
    font-weight: 300;
`

export const FieldInput = styled.input`
    border: none;
    outline: none;
    background: rgba(0, 0, 0, 0);
    color: white;
    padding: 4px 0 0 16px;
    font-size: 15px;
    font-weight: 300
`

export const LoginButton = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 44px;
    margin-right: 12px;
    width: 85px;
    height: 36px;
    align-self: center;
    font-size: 16px;
    font-weight: 500;
    font-weight: 500;
    color: #B22E6F;
`