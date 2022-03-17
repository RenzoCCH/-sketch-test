import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import styled from "styled-components";

const CloseButton = styled.button`
  margin-right: 43px;
`;

const Header = styled.header`
  padding: 22px 24px;
  background: #ffffff;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
`;

const Control = styled.div`
  color: rgba(0, 0, 0, 40%);
  font-size: 16px;
  display: flex;
  vertical-align: center;
`;

const Title = styled.h1`
  font-family: "SF Pro Display", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  margin: auto;
`;

const Numbers = styled.span`
  transform: translateY(-3px);
`;

const Fig = styled.figure`
  margin: 0;
  padding: 48px;
  height: calc(100vh - 162px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Artboard = () => {
  const { image } = useParams();
  const artboard = useSelector((state) => state.document.artboards[+image - 1]);
  const totalImages = useSelector((state) => state.document.artboards.length);
  const navigate = useNavigate();

  const next = () => navigate(`/${+image + 1}`);
  const prev = () => navigate(`/${+image - 1}`);
  const close = () => navigate(`/`);

  return (
    <>
      <Header>
        <Control>
          <CloseButton onClick={close}>
            <img src="/img/close.svg" alt="close" />
          </CloseButton>
          {image > 1 && (
            <button onClick={prev}>
              <img src="/img/arrow-left.svg" alt="left" />
            </button>
          )}
          <Numbers>
            {image}/{totalImages}
          </Numbers>
          {image < totalImages && (
            <button onClick={next}>
              <img src="/img/arrow-right.svg" alt="right" />
            </button>
          )}
        </Control>
        {artboard?.name && <Title>{artboard?.name}</Title>}
      </Header>
      <Fig>
        <Img src={artboard?.files[0].url} alt={artboard?.name} />
      </Fig>
    </>
  );
};

export default Artboard;
