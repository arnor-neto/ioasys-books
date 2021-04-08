import * as Styled from "./styled";
import { Context } from "../../GlobalContext";
import { useContext } from "react";

const UserMenu = ({ userName = "Desconhecido" }) => {
  const [setUser] = useContext(Context);

  const handleLogout = () => {
    setUser({ name: null, auth: null });
  };

  return (
    <Styled.MenuWrapper>
      <Styled.WelcomeText>
        Bem vindo, <Styled.UsernameText>{userName}!</Styled.UsernameText>
      </Styled.WelcomeText>

      <Styled.LogoutButton to="/" onClick={handleLogout} />
    </Styled.MenuWrapper>
  );
};

export default UserMenu;
