import * as Styled from "./styled";
import ProductLogo from "../../components/ProductLogo";
import LoginFields from "../../components/LoginFields";

const Login = () => {
    return(
        <Styled.BackgroundWrapper>
            <Styled.LoginWrapper>
                <ProductLogo color="white"/>
                <LoginFields />
            </Styled.LoginWrapper>
        </Styled.BackgroundWrapper>
    )
}

export default Login;