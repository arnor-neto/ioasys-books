import * as Styled from "./styled";

/**
 * Contains page navigation counters and navigation buttons.
 * Recieves page counters and button click actions.
 */

const PageNavigation = ({currentPage, totalPages, firstPage, lastPage, handleNext, handlePrev}) => {
    return(
        <Styled.Wrapper>
            <Styled.Text>
                Página <Styled.Number>{currentPage}</Styled.Number> de <Styled.Number>{totalPages}</Styled.Number>
            </Styled.Text>
            <Styled.PrevButton firstPage={firstPage} onClick={handlePrev}/>
            <Styled.NextButton lastPage={lastPage} onClick={handleNext}/>
        </Styled.Wrapper>
    )
}

export default PageNavigation;