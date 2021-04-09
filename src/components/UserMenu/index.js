import * as Styled from "./styled";
import { Context } from "../../GlobalContext";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

const UserMenu = ({ userName = "Desconhecido" }) => {
  const [user, setUser] = useContext(Context);

  let history = useHistory();
  const handleLogout = () => {
    console.log(user.name + " has logged off!")
    setUser({ name: "null", auth: "null" });
    history.push("/");
  };

  return (
    <Styled.MenuWrapper>
      <Styled.WelcomeText>
        Bem vindo, <Styled.UsernameText>{userName}!</Styled.UsernameText>
      </Styled.WelcomeText>

      <Styled.LogoutButton onClick={handleLogout} />
    </Styled.MenuWrapper>
  );
};

export default UserMenu;
