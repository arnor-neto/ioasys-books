import * as Styled from "./styled";

const PageNavigation = ({currentPage = 1, totalPages = 100, firstPage = true, lastPage = false}) => {
    return(
        <Styled.Wrapper>
            <Styled.Text>
                Página <Styled.Number>{currentPage}</Styled.Number> de <Styled.Number>{totalPages}</Styled.Number>
            </Styled.Text>
            <Styled.PrevButton firstPage={firstPage}/>
            <Styled.NextButton lastPage={lastPage}/>
        </Styled.Wrapper>
    )
}

export default PageNavigation;