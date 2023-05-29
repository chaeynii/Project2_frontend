import React, { useState } from "react";
import styled from "styled-components";
import IconSearch from "../../assets/icon_search.svg";
import IconDown from "../../assets/icon_down.svg";

const SearchBar = () => {
  const [locationFirst, setLocationFirst] = useState("서울");
  const [locationSecond, setLocationSecond] = useState("광진구");
  const [search, setSearch] = useState("");
  const [total, setTotal] = useState(14);
  const [filter, setFilter] = useState("인기순");
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <Wrapper>
      <Location>
        <BtnShowLocation>
          <img alt="icon-down" src={IconDown}></img>
        </BtnShowLocation>
        <span>{locationFirst + " " + locationSecond}</span>
      </Location>
      <InputBox>
        <input
          type="text"
          value={search}
          onChange={onChange}
          placeholder="병원 이름을 검색해보세요"
        />
        <BtnSearch>
          <img alt="search-button" src={IconSearch}></img>
        </BtnSearch>
      </InputBox>
      <div>
        <Total>총 {total} 개</Total>
        <SearchFilter></SearchFilter>
      </div>
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div`
  position: relative;
  max-width: 76.8rem;
  //   z-index: 20;
  //   display: -webkit-flex;
  //   display: flex;
  //   -webkit-justify-content: center;
  justify-content: center;
  //   -webkit-align-items: center;
  //   align-items: center;
  //   margin: 0 auto;
  //   height: 4.8rem;
  //   padding: 0 1.2rem;
  border-bottom: 1px solid #121212;
`;

const Location = styled.div`
  display: flex;
  justify-contents: center;
  padding: 13px 27px 10px 12px;
  & > span {
    font-size: 24px;
  }
`;

const BtnShowLocation = styled.button`
  background: none;
  border: none;
`;
const InputBox = styled.div`
  width: 100%;
  border: 1px solid #d9d9d9;
  padding: 1rem 4.4rem 0.8rem 1.6rem;
  border-radius: 28px;

  & > input {
    font-size: 24px;
    border: none;
  }
  & > input::placeholder {
    color: #d9d9d9;
  }
  & > input:focus {
    outline: none;
  }
`;

const BtnSearch = styled.button`
  background: none;
  border: none;
`;

const Total = styled.span`
  font-size: 20px;
`;

const SearchFilter = styled.div`
  font-size: 20px;
`;
