import React, { useEffect } from "react";
import { Map } from "react-kakao-maps";
import Header from "../../components/Header";
import styled from "styled-components";
// import CardBox from "../../components/CardBox";
import IconDown from "../../assets/iconDown.svg";

const MapHospital = () => {
  useEffect(() => {
    const API_KEY = "c8a19b4d01a129ab46619cbd29e96ea6"; // 여기에 발급받은 API 키를 입력하세요.

    // API 로드를 위한 스크립트 추가
    const script = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${API_KEY}&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.978),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
      });
    };
  }, []);

  return (
    <Wrapper>
      <Header headerTitle={"병원이름"} />
      <div id="map" style={{ width: "100%", height: "100vh" }} />;
      <CardBox>
        <CardContent>
          <div>
            <BtnHidden>
              <img alt={"icon-down"} src={IconDown}></img>
            </BtnHidden>
          </div>
        </CardContent>
      </CardBox>
    </Wrapper>
  );
};

export default MapHospital;

const Wrapper = styled.div``;

const CardBox = styled.div`
  position: relative;
  width: 100%;
  background: none;
  border: solid 1px #b2b2b2;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 2%;
  margin: 1% 0;
`;

const CardContent = styled.div`
  display: flex;
`;

const BtnHidden = styled.button`
  background: none;
  border: none;
`;
