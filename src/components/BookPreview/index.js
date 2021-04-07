import * as Styled from "./styled";

const BookPreview = ({
  coverURL,
  title,
  authors,
  pageCount,
  publisher,
  published,
}) => {
  return (
    <Styled.Wrapper>
      <Styled.Content>
        <Styled.Cover src={coverURL} />
        <Styled.TextWrapper>
          <Styled.TitlesWrapper>
            <Styled.TitleText>{title}</Styled.TitleText>
            {authors.map((author, index, array) => {
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
  );
};

export default BookPreview;
