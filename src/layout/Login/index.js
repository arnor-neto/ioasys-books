import * as Styled from "./styled";
import ProductLogo from "../../components/ProductLogo";
import LoginFields from "../../components/LoginFields";

/** 
 * Login screen.
 * User will start on this screen if not logged in
 * and will be redirected to it on loggout.
 */

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