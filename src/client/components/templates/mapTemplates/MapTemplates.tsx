import React, {FC, ReactElement, useEffect} from "react";

interface PropTypes {
  children?: ReactElement;
}

const MapTemplates:FC<PropTypes> = ({children}:PropTypes) => {
  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef && mapRef.current) {
      const { kakao } = window;
      const options = {center: new kakao.maps.LatLng(33.450701, 126.570667), level: 3};
      new kakao.maps.Map(mapRef.current, options);
    }
  }, [mapRef])

  return (
    <>
      <div
        className="mask-map"
        style={{ position: 'absolute', top:0, left:0 ,width: "100%", height: "100%" }}
        ref={mapRef}
      />
      {children}
    </>

  )
}
export default MapTemplates;
