import * as Styled from "./styled";
import QuoteIcon from "../../assets/QuoteIcon.png";
import { useEffect, useState, useContext } from "react";
import { Context } from "../../GlobalContext";
import axios from "axios";

const DetailsModal = ({ bookID }) => {
  const [user, setUser] = useContext(Context);
  const [book, setBook] = useState([]);

  useEffect(() => {
    axios
      .get(`https://books.ioasys.com.br/api/v1/books/${bookID}`, {
        headers: {
          Authorization: "Bearer " + user.auth,
        },
      })
      .then((response) => {
        console.log(response.data);
        setBook(response.data);
      })
      .catch((error) => {
        console.log("Erro na requisição");
      });
  }, [bookID]);

  return (
    <Styled.BackgroundWrapper>
      <Styled.ContentWrapper>
        <Styled.Content>
          <Styled.Cover src={book.imageUrl} />

          <Styled.TextWrapper>
            <Styled.TitlesWrapper>
              <Styled.TitleText>{book.title}</Styled.TitleText>
              <span>
                {book.authors?.map((author, index, array) => {
                  if (array.length - 1 === index) {
                    return (
                      <Styled.AuthorText key={index}>
                        {author}
                      </Styled.AuthorText>
                    );
                  } else {
                    return (
                      <Styled.AuthorText key={index}>
                        {author},{" "}
                      </Styled.AuthorText>
                    );
                  }
                })}
              </span>
            </Styled.TitlesWrapper>

            <Styled.InfoWrapper>
              <Styled.InfoTitle style={{ marginBottom: "12px" }}>
                INFORMAÇÕES
              </Styled.InfoTitle>
              <Styled.InfoLine>
                <Styled.InfoTitle>Páginas</Styled.InfoTitle>
                <Styled.InfoData>{book.pageCount} páginas</Styled.InfoData>
              </Styled.InfoLine>
              <Styled.InfoLine>
                <Styled.InfoTitle>Editora</Styled.InfoTitle>
                <Styled.InfoData>{book.publisher}</Styled.InfoData>
              </Styled.InfoLine>
              <Styled.InfoLine>
                <Styled.InfoTitle>Publicação</Styled.InfoTitle>
                <Styled.InfoData>{book.published}</Styled.InfoData>
              </Styled.InfoLine>
              <Styled.InfoLine>
                <Styled.InfoTitle>Idioma</Styled.InfoTitle>
                <Styled.InfoData>{book.language}</Styled.InfoData>
              </Styled.InfoLine>
              <Styled.InfoLine>
                <Styled.InfoTitle>Título Original</Styled.InfoTitle>
                <Styled.InfoData>{book.title}</Styled.InfoData>
              </Styled.InfoLine>
              <Styled.InfoLine>
                <Styled.InfoTitle>ISBN-10</Styled.InfoTitle>
                <Styled.InfoData>{book.isbn10}</Styled.InfoData>
              </Styled.InfoLine>
              <Styled.InfoLine>
                <Styled.InfoTitle>ISBN-13</Styled.InfoTitle>
                <Styled.InfoData>{book.isbn13}</Styled.InfoData>
              </Styled.InfoLine>
            </Styled.InfoWrapper>

            <Styled.ReviewWrapper>
              <Styled.InfoTitle>RESENHA DA EDITORA</Styled.InfoTitle>
              <Styled.ReviewText>
                  <span>
                    <Styled.QuoteIcon src={QuoteIcon} />
                  </span>
                  {book.description}
              </Styled.ReviewText>
            </Styled.ReviewWrapper>
          </Styled.TextWrapper>
        </Styled.Content>
      </Styled.ContentWrapper>
    </Styled.BackgroundWrapper>
  );
};

export default DetailsModal;
