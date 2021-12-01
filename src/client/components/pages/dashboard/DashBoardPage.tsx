import React, { FC, useEffect, useState } from 'react';
import MapContainer from '../../templates/mapTemplate/map/MapContainer';
import MapSidePopup from '../../templates/mapTemplate/popup/MapSidePopup';
import MapCardList from '../../templates/mapTemplate/contents/MapCardList';
import BaseContents from '../../templates/baseTemplate/BaseContents';
import BaseSection from '../../templates/baseTemplate/BaseSection';
import MapPopup from '../../templates/mapTemplate/popup/MapPopup';

interface PropTypes {}

const DashBoardPage: FC<PropTypes> = () => {
  const [openSidePopup, setOpenSidePopup] = useState<boolean>(false);
  const [openMonitorPopup, setOpenMonitorPopup] = useState<boolean>(false);
  const [openStationPopup, setOpenStationPopup] = useState<boolean>(false);
  const [selectedVehicleId, setSelectedVehicleId] = useState<number>(null);
  const [selectedStationId, setSelectedStationId] = useState<number>(null);

  useEffect(() => {
    setOpenMonitorPopup(!!selectedVehicleId);
  }, [selectedVehicleId]);

  useEffect(() => {
    setOpenStationPopup(!!selectedStationId);
  }, [selectedStationId]);

  return (
    <>
      <div>관제</div>
      <div onClick={() => setSelectedStationId(selectedStationId === 3 ? null : 3)}>정류장</div>
      <BaseSection style={{ marginTop: 14 }}>
        <MapCardList setOpenSidePopup={setOpenSidePopup} selectedId={selectedVehicleId} setSelectedId={setSelectedVehicleId} />
        <BaseContents className={'full'}>
          <MapContainer />
        </BaseContents>
        <MapSidePopup openSidePopup={openSidePopup} setOpenSidePopup={setOpenSidePopup} />
        <MapPopup tagTitle="실시간 정보" openPopup={openMonitorPopup} setSelectedId={setSelectedVehicleId} />
        <MapPopup tagTitle="정류장 정보" openPopup={openStationPopup} setSelectedId={setSelectedStationId} style={{ top: 180 }} />
      </BaseSection>
    </>
  );
};
export default DashBoardPage;
