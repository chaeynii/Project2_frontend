import React, { useEffect, useState } from "react";
// import { Map } from "react-kakao-maps";
import Header from "../../components/Header";
import styled, { keyframes, css } from "styled-components";
import CardBox from "../../components/CardBox";
import IconDown from "../../assets/iconDown.svg";
import IconUp from "../../assets/iconUp.svg";
import IconClock from "../../assets/iconClockMap.svg";
import IconLocationGray from "../../assets/iconLocationMap.svg";
import IconLocationGreen from "../../assets/iconLocationGreen.svg";
import IconTelephone from "../../assets/iconTelMap.svg";
import iconHereWhite from "../../assets/iconHereWhite.svg";
import { NavigationBar } from "../../components/NavigationBar";
// import { NavigationBar } from "../../components/navigationBar";
import API_KEYS from "./apikeys.js";

const MapHospital = () => {
  const dutyName = "엄민숙소아청소년과의원";
  const hospitalAddress = "서울시광진구";
  const todayText = "몇";
  const dutyTimeStart = "09:00";
  const dutyTimeClose = "18:30";
  const dutyTel = "02-000-0000";

  useEffect(() => {
    const kakaoMapsApiKey = API_KEYS.kakaoMaps;

    // API 로드를 위한 스크립트 추가
    const script = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoMapsApiKey}&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.978),
          level: 3,
        };
        var map = new window.kakao.maps.Map(container, options);

        // 현재 위치 받아오기
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude; // 현재 위치의 위도
            var lng = position.coords.longitude; // 현재 위치의 경도

            var markerPosition = new window.kakao.maps.LatLng(lat, lng); // 현재 위치 좌표

            var marker = new window.kakao.maps.Marker({
              position: markerPosition,
              image: new window.kakao.maps.MarkerImage(
                IconLocationGreen,
                new window.kakao.maps.Size(70, 70)
              ),
            });

            marker.setMap(map);

            // 현재 위치를 지도 중심으로 설정
            map.setCenter(markerPosition);
          });
        }
      });
    };
  }, []);

  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <Header headerTitle={dutyName} />
      <div
        id="map"
        style={{
          width: "100%",
          height: "100vh",
          position: "relative",
          zIndex: 1,
        }}
      />
      <CardBoxWrap isOpen={isOpen}>
        <CardBox linkTo={"#"}>
          <div>
            <CardBoxHeader>
              <BtnHidden onClick={handleToggle}>
                <img alt={"icon-down"} src={isOpen ? IconDown : IconUp}></img>
              </BtnHidden>
              <div>{dutyName}</div>
            </CardBoxHeader>
            <CardBoxContent>
              <div>
                <img alt={"icon-clock"} src={IconClock} />
                <span>
                  {todayText + "요일 " + dutyTimeStart + " ~ " + dutyTimeClose}
                </span>
              </div>
              <div>
                <img alt={"icon-location"} src={IconLocationGray} />
                <span>{hospitalAddress}</span>
              </div>
              <div>
                <img alt={"icon-telephone"} src={IconTelephone} />
                <span>{dutyTel}</span>
              </div>
            </CardBoxContent>
          </div>
        </CardBox>
      </CardBoxWrap>
      <ButtonStyle>
        <img alt={"icon-here"} src={iconHereWhite}></img>
        <span>현위치</span>
      </ButtonStyle>
      <NavigationBar />
    </Wrapper>
  );
};

export default MapHospital;

const Wrapper = styled.div`
  display: relative;
`;

const CardBoxWrap = styled.div`
  position: absolute;
  top: ${({ isOpen }) => (isOpen ? "90%" : "115%")};
  left: 50%;
  min-width: 40%;
  max-width: 70%;
  box-sizing: border-box;
  z-index: 2;
  transform: translate(-50%, -50%);
  transition: top 0.3s;
`;

const CardBoxHeader = styled.div`
  display: flex;
  font-size: 30px;
  font-weight: 700;
  margin: 3% 0 5% 0;

  & > div {
    margin-left: 2%;
  }
`;

const CardBoxContent = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 5%;

  & > div {
    display: flex;
    justify-content: center;
    margin: 2%;
  }
`;

const BtnHidden = styled.button`
  background: none;
  border: none;
`;

const ButtonStyle = styled.button`
  position: absolute;
  display: flex;
  bottom: 0%;
  left: 50%;
  z-index: 3;
  font-size: 20px;

  font-weight: 700;
  color: white;
  border: 1px solid #00954f;
  border-radius: 5px;
  background-color: #00ad5c;
  cursor: pointer;
  transform: translate(70%, -70%);
  padding: 1% 3.5%;
`;
