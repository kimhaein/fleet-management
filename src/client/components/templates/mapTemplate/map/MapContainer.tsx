import React, { FC, ReactNode, useEffect } from 'react';
import styled from 'styled-components';

interface PropTypes {
  children?: ReactNode;
}
const LAT_LONG = {
  lat: 33.450701,
  lng: 126.570667,
};

const MapConfig = {
  ...LAT_LONG,
  level: 3,
};

const MapContainer: FC<PropTypes> = ({ children }: PropTypes) => {
  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef && mapRef.current) {
      const { kakao } = window;
      const options = { center: new kakao.maps.LatLng(MapConfig.lat, MapConfig.lng), level: MapConfig.level };
      new kakao.maps.Map(mapRef.current, options);
    }
  }, [mapRef]);

  return (
    <>
      <Map className="mask-map" ref={mapRef} />
      {children}
    </>
  );
};
export default MapContainer;

const Map = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
