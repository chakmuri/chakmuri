import React, { useEffect } from "react";

const { kakao } = window;

const MapContainer = () => {
	useEffect(() => {
		const mapContainer = document.getElementById("map");
		const mapOptions = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3,
		};
		const map = new kakao.maps.Map(mapContainer, mapOptions);

		const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);
		const marker = new kakao.maps.Marker({
			position: markerPosition,
		});
		marker.setMap(map);
	}, []);

	return <div id="map" style={{ width: "100%", height: "100%" }}></div>;
};

export default MapContainer;
