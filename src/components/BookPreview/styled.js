import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 272px;
  height: 160px;

  margin-top: 16px;

  background: #ffffff;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 4px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: 132px;
  width: 100%;
  margin: 16px 16px;
`;

export const Cover = styled.img`
  width: 81px;
  height: 122px;
  box-shadow: 0px 6px 9px rgba(0, 0, 0, 0.15);
  margin-right: 16px;
  align-self: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleText = styled.h1`
  margin: 0;
  font-weight: 500;
  font-size: 14px;
  color: #333333;
`;

export const AuthorText = styled.h2`
  margin: 0;
  font-weight: 400;
  font-size: 12px;
  color: #ab2680;
`;

export const DetailText = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 12px;
  color: #999999;
`;
