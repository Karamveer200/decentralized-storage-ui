/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import BodyContainer from '../Common/BodyContainer/BodyContainer';
import Button from '../Common/Button/Button';
import SideDrawer from '../Common/SideDrawer/SideDrawer';
import SideDrawerIndex from '../WheelOfFortune/SideDrawer/Index';

import GrayCard from '../Common/Cards/GrayCard';
import { createNewTopic } from '../../services/hederaService';

const Index = () => {
  const [isSideModalOpen, setIsSideModalOpen] = useState(false);

  const openSideModal = () => {
    setIsSideModalOpen(true);
  };

  const closeSideModal = () => {
    setIsSideModalOpen(false);
  };

  return (
    <BodyContainer rootClassName="h-full">
      <GrayCard>
        <div className="flex gap-5">
          <Button onClick={createNewTopic} text="Create new topic" />
          <Button onClick={openSideModal} text="Search user txns" />
        </div>
      </GrayCard>

      <SideDrawer isSideModalOpen={isSideModalOpen} onClose={closeSideModal}>
        <SideDrawerIndex />
      </SideDrawer>
    </BodyContainer>
  );
};

export default Index;