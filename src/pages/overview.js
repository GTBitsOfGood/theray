import React from 'react';
import '../static/css/overview.css';
import PropTypes from 'prop-types';
import Car from '../static/images/full-car.png';
import Graphic from '../static/images/car-graphic.svg';
import Left from '../static/images/left-background.svg';
import Right from '../static/images/right-background.png';
import RightMobile from '../static/images/right-backgroundmobile.png';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';

const Overview = (props) => {
  const { pageIndex } = props;
  return (
    <div className="overview-body">
      <div className="overview-left">
        <img className="overview-left-background" src={Left} alt="Left background" />
        <ParallaxComponent pageIndex={pageIndex} transitionTime={1500} transitionDelay={0} styles={{ height: '100%' }}>
          <img className="overview-left-image" src={Graphic} alt="Car Graphic" />
        </ParallaxComponent>
        <p className="overview-left-text">Traditional tire inflation and monitoring methods are a hassle.</p>
      </div>
      <div className="overview-right">
        <img className="overview-right-image" src={Car} alt="The Ray Car" />
        <img className="overview-right-background" src={Right} alt="Right background" />
        <img className="overview-right-background_mobile" src={RightMobile} alt="Right background" />
        <ParallaxComponent pageIndex={pageIndex} transitionTime={1500} transitionDelay={0} styles={{ height: '100%' }}>
          <p className="overview-right-text">
            <b>WheelRight </b> strives to make this process easier to{' '}
            <b>save time, fuel, money, and most importantly</b>
            --lives.
          </p>
        </ParallaxComponent>
      </div>
    </div>
  );
};

Overview.propTypes = {
  pageIndex: PropTypes.number,
};

Overview.defaultProps = {
  pageIndex: -2,
};

export default Overview;
