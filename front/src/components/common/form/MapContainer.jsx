import React, { useEffect } from "react";

const { kakao } = window;

const MapContainer = ({ searchSpot }) => {
	useEffect(() => {
		const mapContainer = document.getElementById("map");
		const mapOptions = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3,
		};
		const map = new kakao.maps.Map(mapContainer, mapOptions);

		let geocoder = new kakao.maps.services.Geocoder();

		geocoder.addressSearch(searchSpot, (result, status) => {
			if (status === kakao.maps.services.Status.OK) {
				let coords = new kakao.maps.LatLng(result[0].y, result[0].x);
				let marker = new kakao.maps.Marker({
					map: map,
					position: coords,
				});
				map.setCenter(coords);
				marker.setMap(map);
			}
		});
	}, [searchSpot]);

	return <div id="map" style={{ width: "100%", height: "100%" }}></div>;
};

export default MapContainer;
