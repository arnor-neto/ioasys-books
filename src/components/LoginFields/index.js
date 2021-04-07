import * as Styled from "./styled";

const LoginFields = () => {
  return (
    <Styled.FormWrapper>

      <Styled.FieldWrapper>
        <Styled.FieldLabel>Email</Styled.FieldLabel>
        <Styled.FieldInput />
      </Styled.FieldWrapper>

      <Styled.ButtonFieldWrapper>

        <Styled.PasswordWrapper>
          <Styled.FieldLabel>Senha</Styled.FieldLabel>
          <Styled.FieldInput type="password"/>
        </Styled.PasswordWrapper>

        <Styled.LoginButton>Entrar</Styled.LoginButton>

      </Styled.ButtonFieldWrapper>

    </Styled.FormWrapper>
  );
};

export default LoginFields;
