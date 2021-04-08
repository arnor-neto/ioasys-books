import styled from "styled-components";

export const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
`;

export const ContentWrapper = styled.div`
  display: flex;
  height: 80vh;
  width: 57%;
  box-shadow: 0px 16px 80px rgba(0, 0, 0, 0.32);
  border-radius: 4px;
  background: #ffffff;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 6% 5%;
`;

export const Cover = styled.img`
  width: 50%;
  max-height: 513px;
  object-fit: cover;
  box-shadow: 0px 12px 18px rgba(0, 0, 0, 0.3);
`;

export const TextWrapper = styled.div`
  display: flex;
  width: 43%;
  flex-direction: column;
  justify-content: space-between;
  padding: 4px 0;
`;

export const TitlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleText = styled.h1`
  margin: 0;
  line-height: 40px;
  font-size: 28px;
  font-weight: 500;
  color: #333333;
`;

export const AuthorText = styled.strong`
  margin: 0;
  font-size: 12px;
  line-height: 20px;
  font-weight: 400;
  color: #ab2680;
`;

export const InfoLine = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const InfoTitle = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 12px;
  color: #333333;
`;

export const InfoData = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 300;
  line-height: 20px;
  text-align: right;
  color: #999999;
`;

export const ReviewText = styled.p`
  margin: 0;
  margin-top: 12px;
  max-height: 170px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #999999;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
    background: rgba(0, 0, 0, 0);
    border-radius: 30px;
  }
  &::-webkit-scrollbar-thumb {
    width: 4px;
    background: #e7cfe4;
    border-radius: 30px;
  }
`;

export const QuoteIcon = styled.img`
  position: relative;
  top: 2px;
  margin-right: 4px;
`;
