import * as Styled from "./styled";
import IoasysLogoWhite from "../../assets/LogoWhite.png";
import IoasysLogoGray from "../../assets/LogoGray.png";

const ProductLogo = ({color}) => {
    return(
        <Styled.LogoWrapper>
            {color == 'white' && <Styled.Image src={IoasysLogoWhite}></Styled.Image>}
            {color == 'gray' && <Styled.Image src={IoasysLogoGray}></Styled.Image>}
            <Styled.Text color={color} >Books</Styled.Text>
        </Styled.LogoWrapper>
    )
}

export default ProductLogo;