import { useState } from "react";
import DetailsModal from "../DetailsModal";
import * as Styled from "./styled";

/**
 * Simple component for book listing. Recieves all data
 * from a book and renders a small card with information.
 */

const BookPreview = ({
  bookID,
  coverURL,
  title,
  authors,
  pageCount,
  publisher,
  published,
}) => {
  const [activeModal, setActiveModal] = useState(false);

  return (
    <>
      <Styled.Wrapper onClick={() => setActiveModal(true)}>
        <Styled.Content>
          <Styled.Cover src={coverURL} />
          <Styled.TextWrapper>
            <Styled.TitlesWrapper>
              <Styled.TitleText>{title}</Styled.TitleText>
              {authors?.map((author, index, array) => {
                if (array.length - 1 === index) {
                  return (
                    <Styled.AuthorText key={index}>{author}</Styled.AuthorText>
                  );
                } else {
                  return (
                    <Styled.AuthorText key={index}>{author},</Styled.AuthorText>
                  );
                }
              })}
            </Styled.TitlesWrapper>

            <Styled.DetailsWrapper>
              <Styled.DetailText>{pageCount} páginas</Styled.DetailText>
              <Styled.DetailText>{publisher}</Styled.DetailText>
              <Styled.DetailText>Publicado em {published}</Styled.DetailText>
            </Styled.DetailsWrapper>
          </Styled.TextWrapper>
        </Styled.Content>
      </Styled.Wrapper>

      {activeModal && (
        <Styled.CloseButton onClick={() => setActiveModal(false)} />
      )}
      {activeModal && <DetailsModal bookID={bookID} />}
    </>
  );
};

export default BookPreview;
