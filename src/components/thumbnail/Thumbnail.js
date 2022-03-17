import styled from "styled-components";

const Fig = styled.figure`
  text-align: center;
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const Img = styled.img`
  width: auto;
  max-width: 100%;
`;

const Caption = styled.figcaption`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.15px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.65);
  padding-top: 16px;
`;

const ImageWrapper = styled.div`
  margin: auto 0;
  
`;

const Thumbnail = ({ artboard }) => {
  let thumbnail = "";
  const files = artboard?.files || [];
  if (files.length && files[0].url && files[0].thumbnails.length) {
    thumbnail = files[0].thumbnails[1].url;
  }
  return (
    <Fig>
      {thumbnail && (
        <ImageWrapper>
          <Img src={thumbnail} alt={artboard.name} />
        </ImageWrapper>
      )}
      {artboard?.name && <Caption>{artboard.name}</Caption>}
    </Fig>
  );
};

export default Thumbnail;
