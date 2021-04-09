import * as Styled from "./styled";
import ErrorBubble from "../ErrorBubble";
import { useForm } from "react-hook-form";
import { useState, useContext, useEffect } from "react";
import { Context } from "../../GlobalContext";
import { useHistory } from "react-router-dom";
import axios from "axios";

/**
 * Reads and authenticates login info.
 * On form submit, autheticates the given login credentials via API call.
 */

const LoginFields = () => {
  let history = useHistory();
  const [error, setError] = useState(false);
  const [user, setUser] = useContext(Context);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (user.auth !== "null") {
      history.push("/books");
    }
  }, [user, history]);

  const onSubmit = (data) => {
    axios
      .post("https://books.ioasys.com.br/api/v1/auth/sign-in", {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        setUser({
          name: response.data.name,
          auth: response.headers.authorization,
        });
        console.log(user);
        setError(false);
        history.push("/books");
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <Styled.FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Styled.FieldWrapper>
        <Styled.FieldLabel>Email</Styled.FieldLabel>
        <Styled.FieldInput {...register("email")} />
      </Styled.FieldWrapper>

      <Styled.ButtonFieldWrapper>
        <Styled.PasswordWrapper>
          <Styled.FieldLabel>Senha</Styled.FieldLabel>
          <Styled.FieldInput type="password" {...register("password")} />
        </Styled.PasswordWrapper>

        <Styled.LoginButton>Entrar</Styled.LoginButton>
      </Styled.ButtonFieldWrapper>

      <ErrorBubble error={error} message="Email e/ou senha incorretos." />
    </Styled.FormWrapper>
  );
};

export default LoginFields;
