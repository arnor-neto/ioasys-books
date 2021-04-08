import styled from "styled-components";
import CloseIcon from "../../assets/CloseIcon.png";

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
  overflow-y: scroll;
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

export const AuthorText = styled.strong`
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

export const CloseButton = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;

  cursor: pointer;
  border: 1px solid rgba(51, 51, 51, 0.2);
  outline: none;
  height: 32px;
  width: 32px;
  border-radius: 50%;

  background: #ffffff;
  background-image: url(${CloseIcon});
  background-repeat: no-repeat;
  background-position: center;
  z-index: 10;
`;
