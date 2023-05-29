import React from "react";
import styled from "styled-components";
import IconLeft from "../assets/icon_left.svg";

const Header = () => {
  return (
    <HeaderWrap>
      <BtnBack>
        <img alt="icon-left" src={IconLeft}></img>
      </BtnBack>
      <h2>병원 찾기</h2>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.div`
  width: 100%;
  border-bottom: 1px solid;
  margin: 0 121.818px;
  display: flex;

  & > h2 {
    font-size: 20px;
    color: #00ad5c;
  }
`;

const BtnBack = styled.button`
  background: none;
  border: none;
`;
