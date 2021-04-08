import styled from "styled-components";
import DashboardBackground1 from "../../assets/DashboardBackground1.png";
import DashboardBackground2 from "../../assets/DashboardBackground2.png";

export const BackgroundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url(${DashboardBackground1}), url(${DashboardBackground2});
  background-blend-mode: darken;
  background-position: fixed;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
    background: rgba(0, 0, 0, 0);
    border-radius: 30px;
    padding-left: 10px;
  }
  &::-webkit-scrollbar-thumb {
    width: 8px;
    background: #e7cfe4;
    border-radius: 30px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 42px;
  width: 83%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 24px;
  width: 83%;
`;

export const NavigationWrapper = styled.div`
  display: flex;
  width: 83%;
  justify-content: flex-end;
  margin-top: 16px;
  margin-bottom: 42px;
`;
