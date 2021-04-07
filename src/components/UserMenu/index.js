import * as Styled from "./styled";

const UserMenu = ({userName = 'Desconhecido'}) => {
    return(
        <Styled.MenuWrapper>
            <Styled.WelcomeText>Bem vindo, <Styled.UsernameText>{userName}!</Styled.UsernameText></Styled.WelcomeText>
            
            <Styled.LogoutButton/>
        </Styled.MenuWrapper>
    )
}

export default UserMenu;