import * as Styled from "./styled";
import ProductLogo from "../../components/ProductLogo";
import BookPreview from "../../components/BookPreview";
import UserMenu from "../../components/UserMenu";
import PageNavigation from "../../components/PageNavigation";

const Books = () => {
    return(
        <Styled.BackgroundWrapper>
            
            <Styled.Header>
            <ProductLogo color={"gray"} />
            <UserMenu/>
            </Styled.Header>

            <Styled.Content>
            <BookPreview coverURL="https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg" title="Título teste" authors={["Arnor Neto", "Dandara Estrela"]} pageCount="500" publisher="Ioasys Books" published="2021"/>
            <BookPreview coverURL="https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg" title="Título teste" authors={["Arnor Neto", "Dandara Estrela"]} pageCount="500" publisher="Ioasys Books" published="2021"/>
            <BookPreview coverURL="https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg" title="Título teste" authors={["Arnor Neto", "Dandara Estrela"]} pageCount="500" publisher="Ioasys Books" published="2021"/>
            <BookPreview coverURL="https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg" title="Título teste" authors={["Arnor Neto", "Dandara Estrela"]} pageCount="500" publisher="Ioasys Books" published="2021"/>
            <BookPreview coverURL="https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg" title="Título teste" authors={["Arnor Neto", "Dandara Estrela"]} pageCount="500" publisher="Ioasys Books" published="2021"/>
            <BookPreview coverURL="https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg" title="Título teste" authors={["Arnor Neto", "Dandara Estrela"]} pageCount="500" publisher="Ioasys Books" published="2021"/>
            <BookPreview coverURL="https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg" title="Título teste" authors={["Arnor Neto", "Dandara Estrela"]} pageCount="500" publisher="Ioasys Books" published="2021"/>
            <BookPreview coverURL="https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg" title="Título teste" authors={["Arnor Neto", "Dandara Estrela"]} pageCount="500" publisher="Ioasys Books" published="2021"/>
            <BookPreview coverURL="https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg" title="Título teste" authors={["Arnor Neto", "Dandara Estrela"]} pageCount="500" publisher="Ioasys Books" published="2021"/>
            <BookPreview coverURL="https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg" title="Título teste" authors={["Arnor Neto", "Dandara Estrela"]} pageCount="500" publisher="Ioasys Books" published="2021"/>
            <BookPreview coverURL="https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg" title="Título teste" authors={["Arnor Neto", "Dandara Estrela"]} pageCount="500" publisher="Ioasys Books" published="2021"/>
            <BookPreview coverURL="https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg" title="Título teste" authors={["Arnor Neto", "Dandara Estrela"]} pageCount="500" publisher="Ioasys Books" published="2021"/>
            </Styled.Content>

            <Styled.NavigationWrapper>
            <PageNavigation/>
            </Styled.NavigationWrapper>

        </Styled.BackgroundWrapper>
    )
}

export default Books;
