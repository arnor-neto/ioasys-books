import * as Styled from "./styled";
import ProductLogo from "../../components/ProductLogo";
import BookPreview from "../../components/BookPreview";
import UserMenu from "../../components/UserMenu";
import PageNavigation from "../../components/PageNavigation";
import { Context } from "../../GlobalContext";
import { useEffect, useState, useContext } from "react";
import axios from "axios";

const Books = () => {
  const [user, setUser] = useContext(Context);
  const [books, setBooks] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [firstPage, setFirstPage] = useState(true);
  const [lastPage, setLastPage] = useState(false);

  const handleNextPage = () => {
    if (currentPage === 1) {
      setFirstPage(false);
    } else if (currentPage === 41) {
      setLastPage(true);
    }
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage === 2) {
      setFirstPage(true);
    } else if (currentPage === 42) {
      setLastPage(false);
    }
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://books.ioasys.com.br/api/v1/books?page=${currentPage}&amount=12`,
        {
          headers: {
            Authorization: "Bearer " + user.auth,
          },
        }
      )
      .then((response) => {
        setBooks(response.data.data);
        setTotalPages(response.data.totalPages);
        setCurrentPage(response.data.page);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Erro na requisição");
      });
  }, [currentPage]);

  return (
    <Styled.BackgroundWrapper>
      <Styled.Header>
        <ProductLogo color={"gray"} />
        <UserMenu userName={user.name?.split(" ")[0]} />
      </Styled.Header>

      <Styled.Content>
        {books?.map((book) => {
          return (
            <BookPreview
              key={book.id}
              bookID={book.id}
              coverURL={book.imageUrl}
              title={book.title}
              authors={book.authors}
              pageCount={book.pageCount}
              publisher={book.publisher}
              published={book.published}
            />
          );
        })}
      </Styled.Content>

      <Styled.NavigationWrapper>
        <PageNavigation
          currentPage={currentPage}
          totalPages={totalPages}
          handleNext={handleNextPage}
          handlePrev={handlePrevPage}
          firstPage={firstPage}
          lastPage={lastPage}
        />
      </Styled.NavigationWrapper>
    </Styled.BackgroundWrapper>
  );
};

export default Books;
