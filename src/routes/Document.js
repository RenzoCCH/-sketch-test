import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Thumbnail from "../components/thumbnail/Thumbnail";
import styled from "styled-components";


const Header = styled.header`
  display: flex;
  padding: 13px 24px;
  background: #ffffff;
`;
const Main = styled.main`
  padding: 24px;
  max-width: 1440px;
  margin: auto;
`;
const Title = styled.h1`
  font-family: "Helvetica";
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  margin-left: 26px;
`;
const ThumbList = styled.ul`
  list-style-type: none;
  margin:0;
  padding:0;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-auto-rows: 1fr;
  grid-column-gap: 48px;
  grid-row-gap: 24px
`;

const Document = () => {
  const document = useSelector((state) => state.document);

  return (
    <>
      <Header>
        <img src="/img/sketch-logo.svg" alt="Logo" />
        {document.name && <Title>{document.name}</Title>}
      </Header>
      <Main>
        {!!document.artboards.length && (
          <ThumbList>
            {document.artboards.map((artboard, index) => (
              <li key={artboard.name}>
                <Link to={`/${index + 1}`}>
                  <Thumbnail artboard={artboard} />
                </Link>
              </li>
            ))}
          </ThumbList>
        )}
      </Main>
    </>
  );
};

export default Document;
