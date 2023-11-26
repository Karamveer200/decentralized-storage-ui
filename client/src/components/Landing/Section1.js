import React from 'react';
import BodyContainer from '../Common/BodyContainer/BodyContainer';
import wheelSections from '../../assets/wheelSections.png';
import Button from '../Common/Button/Button';
import { useNavigate } from 'react-router-dom';
import { PLATFORM_FEES } from '../../utils/constants';
import { ALL_ROUTES_PATHS } from '../../utils/routes';

const Section1 = () => {
  const navigate = useNavigate();

  const redirectToWheelOfFortune = () => {
    navigate(ALL_ROUTES_PATHS.WHEEL_OF_FORTUNE);
  };

  return (
    <BodyContainer>
      <div className="flex flex-col lg:flex-row pb-24 sm:pb-32 pt-8 lg:pt-0"></div>
    </BodyContainer>
  );
};

export default Section1;
