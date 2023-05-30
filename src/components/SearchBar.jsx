import React, { useState } from "react";
import styled from "styled-components";
import IconSearch from "../assets/icon_search.svg";
import IconDown from "../assets/icon_down.svg";
import IconAlarm from "../assets/icon_alarm.svg";
import location_data from "../assets/address_list.json";

const SearchBar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const [locationFirst, setLocationFirst] = useState(
    location_data[0]["시/도"][1]
  );
  const [locationSecond, setLocationSecond] = useState(
    location_data[0]["시/군/구"][0]
  );
  // 시/도 드롭다운 컴포넌트
  const handleLocationFirstChange = (event) => {
    setLocationFirst(event.target.value);
  };

  const locationFirstOptions = location_data.map((location) => (
    <option key={location["시/도"][0]} value={location["시/도"][1]}>
      {location["시/도"][1]}
    </option>
  ));
  // 시/군/구 드롭다운 컴포넌트
  const handleLocationSecondChange = (event) => {
    setLocationSecond(event.target.value);
  };

  const locationSecondOptions = location_data.map((location) => {
    if (location["시/도"][1] === locationFirst) {
      return location["시/군/구"].map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ));
    }
  });

  const [search, setSearch] = useState("");
  const [total, setTotal] = useState(14);

  const filterItem = [
    { name: "인기순", state: "byPopular" },
    { name: "이름순", state: "byName" },
  ];
  const [filter, setFilter] = useState(filterItem[0]);
  const [toggle, setToggle] = useState(false);

  const onChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <Wrapper>
      <div>
        <Location>
          <BtnShowLocation onClick={openModal}>
            <img alt="icon-down" src={IconDown}></img>
          </BtnShowLocation>
          <Modal isOpen={modalIsOpen} onClose={closeModal}>
            <span>{locationFirst + " " + locationSecond}</span>
            <select value={locationFirst} onChange={handleLocationFirstChange}>
              {locationFirstOptions}
            </select>
            <select
              value={locationSecond}
              onChange={handleLocationSecondChange}
            >
              {locationSecondOptions}
            </select>
            <button onClick={closeModal}>닫기</button>
          </Modal>
        </Location>
        <Alarm>
          <img alt="icon-alarm" src={IconAlarm}></img>
        </Alarm>
      </div>
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
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div`
  position: relative;
  max-width: 833px;
  padding-top: 2%;
  margin: 2%;

  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

const Location = styled.div`
  width: 100%;
  display: flex;
  justify-contents: center;
  align-items: center;
  & > span {
    font-size: 24px;
  }
`;

const Alarm = styled.button`
  background: none;
  border: none;
  padding-right: 2%;
`;

const BtnShowLocation = styled.button`
  background: none;
  border: none;
`;

const InputBox = styled.div`
  width: 100%;
  border: 1px solid #b2b2b2;
  margin-top: 2%;
  padding: 2% 2.5%;
  box-sizing: border-box;
  border-radius: 28px;
  text-align: center;

  & > input {
    font-size: 24px;
    border: none;
    width: 100%;
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

const Modal = styled.div`
  /* 모달 스타일링을 여기에 추가하세요 */
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const ModalContent = styled.div`
  /* 모달 내용 스타일링을 여기에 추가하세요 */
  background-color: #fff;
  width: 400px;
  max-width: 90%;
  margin: 100px auto;
  padding: 20px;
  border-radius: 4px;
`;
