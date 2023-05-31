import React from "react";
import styled from "styled-components";
import IconLeft from "../assets/iconLeft.svg";

const Header = ({ headerTitle }) => {
  return (
    <HeaderWrap>
      <BtnBack>
        <img alt="icon-left" src={IconLeft}></img>
      </BtnBack>
      <h2>{headerTitle}</h2>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.div`
  width: 100%;
  border-bottom: 1px solid #b2b2b2;
  display: flex;
  text-align: center;
  justify-content: center;

  & > h2 {
    font-size: 20px;
    color: #00ad5c;
  }
`;

const BtnBack = styled.button`
  background: none;
  border: none;
`;
