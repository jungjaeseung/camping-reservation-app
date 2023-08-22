import { useEffect } from "react";
import useCities from "../hooks/useCity";

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP}&libraries=services,clusterer&autoload=false`;

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap = () => {
  const cities = useCities();
  console.log(cities.getAll());

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = KAKAO_SDK_URL;
    document.head.appendChild(script);

    script.addEventListener("load", () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const mapOption = {
          center: new window.kakao.maps.LatLng(36.336737, 127.9434),
          level: 14,
        };
        new window.kakao.maps.Map(mapContainer, mapOption);
      });
    });
  }, []);
  return (
    <div className="w-full">
      <div id="map" className="w-full h-96"></div>
    </div>
  );
};

export default KakaoMap;
