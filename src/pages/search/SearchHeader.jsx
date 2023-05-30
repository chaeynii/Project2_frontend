import React, { useState } from "react";
import styled from "styled-components";
import SearchBar from "../../components/SearchBar";
import IconDown from "../../assets/icon_down.svg";

const SearchHeader = () => {
  const [total, setTotal] = useState(14);

  const filterItem = [
    { name: "인기순", state: "byPopular" },
    { name: "이름순", state: "byName" },
  ];
  const [filter, setFilter] = useState(filterItem[0]);
  const [toggle, setToggle] = useState(false);

  return (
    <Wrapper>
      <SearchBar />
      <div>
        <Total>총 {total} 개</Total>
        <SearchFilter>
          <span>{filter.name}</span>
          <img alt="icon-down" src={IconDown}></img>
        </SearchFilter>
      </div>
    </Wrapper>
  );
};

export default SearchHeader;

const Wrapper = styled.div`
  position: relative;
  max-width: 833px;
  border-bottom: 1px solid #121212;

  & > div:nth-child(2) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 5% auto;
    margin: 2% auto;
  }
`;

const Total = styled.span`
  font-size: 20px;
`;

const SearchFilter = styled.button`
  font-size: 20px;
  background: none;
  border: none;
  display: flex;
  justify-content: center;
`;
